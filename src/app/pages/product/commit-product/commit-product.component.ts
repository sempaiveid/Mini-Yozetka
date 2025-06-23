import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commit-product',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './commit-product.component.html',
  styleUrls: ['./commit-product.component.css']
})
export class CommitProductComponent implements OnInit {
  @Input() productId!: string;
  textCommit: string = '';
  messages: { [productId: string]: string[] } = {};

  ngOnInit(): void {
    const saved = localStorage.getItem('messages');
    if (saved) {
      this.messages = JSON.parse(saved);
    }
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

    this.messages[this.productId].push(sanitized);
    localStorage.setItem('messages', JSON.stringify(this.messages));
    this.textCommit = '';
  }

  get comments(): string[] {
    return this.messages[this.productId] || [];
  }
}