import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Умови використання | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Ознайомтесь з умовами використання сервісу Mini-Yozetka. Ваш комфорт і безпека — наш пріоритет.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Умови використання | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Ознайомтесь з умовами використання сервісу Mini-Yozetka. Ваш комфорт і безпека — наш пріоритет.'
      },
      { property: 'og:image', content: 'https://example.com/assets/og-terms.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/terms' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}