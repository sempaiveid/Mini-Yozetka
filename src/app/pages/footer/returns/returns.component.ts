import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-returns',
  imports: [RouterLink],
  templateUrl: './returns.component.html',
  styleUrl: './returns.component.css'
})
export class ReturnsComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Повернення товару | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Дізнайтесь про умови повернення товару в інтернет-магазині Mini-Yozetka. Прості та зрозумілі правила.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Повернення товару | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Повернення товару протягом 14 днів. Інструкції, умови, зворотна доставка.'
      },
      { property: 'og:image', content: '/assets/og-returns.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/returns' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
