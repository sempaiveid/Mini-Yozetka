import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-delivery',
  imports: [RouterLink],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Доставка | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Інформація про доставку товарів в Mini-Yozetka: терміни, вартість, служби доставки.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Доставка | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Детальна інформація про умови доставки в Mini-Yozetka: терміни, способи та партнери.'
      },
      { property: 'og:image', content: 'https://example.com/assets/og-delivery.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/delivery' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
