import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-catergory',
  imports: [RouterModule],
  templateUrl: './header-catergory.component.html',
  styleUrl: './header-catergory.component.css'
})
export class HeaderCatergoryComponent {

 @Input() category = "name"
}
