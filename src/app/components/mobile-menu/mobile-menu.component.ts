import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css',
})
export class MobileMenuComponent {
  @Input() isOpen = false;
  @Input() cartCount = 0;

  @Output() close = new EventEmitter<void>();
  login = inject(LoginService);
  mail: any;
  user: any;
  onCloseClick() {
    this.close.emit(); // сообщение родителю, что нужно закрыть меню
  }
  showCategories = false;

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  ngOnInit() {
    this.login.user$.subscribe((data) => {
      this.user = data?.user_name || 'Користувач';
      this.mail = data?.login  || "your-main-addres@gmail.com"
    });
  }
}
