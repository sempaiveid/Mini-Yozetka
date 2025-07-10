import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts',
  imports: [RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Контакти | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Контактна інформація Mini-Yozetka: адреса, телефон, електронна пошта. Зв’яжіться з нами для консультацій або підтримки.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Контакти | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Контактна інформація Mini-Yozetka: адреса, телефон, електронна пошта. Зв’яжіться з нами для консультацій або підтримки.'
      },
      { property: 'og:image', content: 'https://example.com/assets/og-contacts.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/contacts' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
