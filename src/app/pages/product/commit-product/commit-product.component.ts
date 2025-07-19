import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, inject, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-commit-product',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './commit-product.component.html',
  styleUrls: ['./commit-product.component.css'],
})
export class CommitProductComponent {
  @Input() productId!: string;
  textCommit: string = '';
  messages: any = [];
  http = inject(HttpClient);
  login = inject(LoginService);
  lengthArr = 15;
  commentsObj: { user: string; com: string[];img:string } = {
    user: '',
    com: [],
    img:''
  };
  user: string = 'Користувач';
  userPhoto:string=""
  ngOnInit() {
    this.login.user$.subscribe((data) => {
      this.user = data?.user_name || 'Користувач';
      if(data?.profile_icon){
        this.userPhoto = String(data?.profile_icon)
      }else{
        this.userPhoto = this.arr[1]
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const saved = localStorage.getItem('messages');
    // if (saved) {
    //   this.messages = JSON.parse(saved);
    // }
    this.http
      .get<{ user: string; com: string[] }[]>(
        `http://localhost:3000/comments/${this.productId}`
      )
      .subscribe((data) => {
        console.log(data);
        this.messages[this.productId] = data || [];
        this.lengthArr = this.messages[this.productId].length;
        console.log(this.messages);
      });
  }

  sanitizeComment(text: string): string {
    const bannedWords = ['кокос', 'банан', 'поганий'];
    let result = text;

    for (const word of bannedWords) {
      const regex = new RegExp(word, 'gi');
      result = result.replace(regex, (match) => '*'.repeat(match.length));
    }

    result = result.replace(/@/g, '*');

    return result;
  }

  saveToLocalStorage(): void {
    const trimmed = this.textCommit.trim();
    if (trimmed === '') return;
    const sanitized = this.sanitizeComment(trimmed);
    if (!this.messages[this.productId]) {
      this.messages[this.productId] = [];
    }
    this.commentsObj = {
      user: this.user,
      com: [sanitized],
      img:this.userPhoto
    };
    this.messages[this.productId].push(this.commentsObj);
    this.http
      .post('http://localhost:3000/comments', {
        productId: this.productId,
        comments: this.messages[this.productId] || [],

      })
      .subscribe((data) => {
        console.log(data);
      });
    this.textCommit = '';
  }

  get comments(): any {
    return this.messages[this.productId] || [];
  }

  arr = [
    'user-img/user.png',
    'user-img/user1.png',
    'user-img/user2.png',
    'user-img/user3.png',
    'user-img/user4.png',
  ];

  randomAvatars = Array.from({ length: this.lengthArr }, () => {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  });
}