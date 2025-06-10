import { TestBed } from '@angular/core/testing';
import { NgFor, } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-description-product',
  imports: [NgFor],
  templateUrl: './description-product.component.html',
  styleUrl: './description-product.component.css'
})
export class DescriptionProductComponent {
  @Input() description: { tile: string, text: string} = { "tile": "", "text": ""};
  isCollapsed = true;
  lines = ['']

  ngOnInit() {
    const text = this.description.text
    const lines = text.split('\n')
    this.lines = lines

  }
  openDiv() {

    this.isCollapsed = !this.isCollapsed;
  }
}
