import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Про нас | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Дізнайтесь більше про інтернет-магазин Mini-Yozetka — хто ми та чим займаємось'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Про нас | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Хто ми, що ми робимо і чому ми найкращі — все про Mini-Yozetka'
      },
      { property: 'og:image', content: 'https://example.com/assets/about-og.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/about' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
