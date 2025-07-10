import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gift-cards',
  imports: [RouterLink],
  templateUrl: './gift-cards.component.html',
  styleUrl: './gift-cards.component.css'
})
export class GiftCardsComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Подарункові сертифікати | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Подарункові сертифікати Mini-Yozetka — ідеальний подарунок для будь-якої нагоди.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Подарункові сертифікати | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Обирайте зручні сертифікати для своїх близьких. Вигідно, швидко та зручно!'
      },
      { property: 'og:image', content: '/assets/og-gift-card.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/gift-cards' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
