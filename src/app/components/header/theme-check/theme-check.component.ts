import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-check',
  imports: [FormsModule],
  templateUrl: './theme-check.component.html',
  styleUrl: './theme-check.component.css'
})
export class ThemeCheckComponent {
  isDark: boolean = false;

  constructor(){
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.darkTheme();
    } else {
      this.ligthTheme();
    }
  }

  click() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.darkTheme()
    }else{
      this.ligthTheme()
    }

  }
  ligthTheme(): void {
    document.body.classList.add("ligth-theme");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light")
    this.isDark = false;
  }
  darkTheme(): void {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark")
    this.isDark = true;
  }
}
