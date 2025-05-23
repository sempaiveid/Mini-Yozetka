import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-ads',
  imports: [NgStyle],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent {
  slide = "";
  count = 0;
  interval:any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.right();
    }, 5000); 
  }

  right() {
    this.count += 100;
    if (this.count > 400) {
      this.count = 0;
    }
    this.slide = `translateX(-${this.count}%)`;
  }

  left() {
    this.count -= 100;
    if (this.count < 0) {
      this.count = 400;
    }
    this.slide = `translateX(-${this.count}%)`;
  }
}