import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-catergory',
  imports: [RouterModule,RouterLink],
  templateUrl: './header-catergory.component.html',
  styleUrl: './header-catergory.component.css'
})
export class HeaderCatergoryComponent {

 @Input() category = "name"
}
