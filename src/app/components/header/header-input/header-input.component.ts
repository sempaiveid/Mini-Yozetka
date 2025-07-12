import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'header-input',
  imports: [ReactiveFormsModule],
  templateUrl: './header-input.component.html',
  styleUrl: './header-input.component.css'
})
export class HeaderInputComponent {
  // constructor() {
  //   this.liveValue.valueChanges.subscribe(value => {
  //     if (value !== "")// подписываемя на изменения значения у инпута и делаем живой поиск 
  //       this.router.navigate(['/search'], { queryParams: { nameProduct: value } })

  //   })
  // }
  router = inject(Router)
  liveValue = new FormControl("")
  onEnter(event: SubmitEvent) {
    event.preventDefault();// У бераем дефолтные действия 
    const inputValue = ((event.target as HTMLFormElement).elements.namedItem("search") as HTMLInputElement).value
    setTimeout(() => {
      this.router.navigate(['/search'], { queryParams: { nameProduct: inputValue } });
    }, 700);
  }

}
