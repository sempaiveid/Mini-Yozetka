import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bonus',
  imports: [RouterLink],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css'
})
export class BonusComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Бонусний рахунок | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Слідкуйте за своїми бонусами в Mini-Yozetka. Бонусний рахунок для вигідних покупок.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Бонусний рахунок | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Накопичуйте бонуси та використовуйте їх при наступних покупках. Деталі у вашому бонусному рахунку.'
      },
      { property: 'og:image', content: '/assets/og-bonus.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/bonus' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
