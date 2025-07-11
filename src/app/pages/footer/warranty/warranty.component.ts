import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-warranty',
  imports: [RouterLink],
  templateUrl: './warranty.component.html',
  styleUrl: './warranty.component.css'
})
export class WarrantyComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Гарантія | Mini-Yozetka');
    this.meta.addTags([
      {
        name: 'description',
        content: 'Інформація про гарантію на товари, умови обміну та ремонту в Mini-Yozetka.'
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Гарантія | Mini-Yozetka' },
      {
        property: 'og:description',
        content: 'Детальні умови гарантії на товари: терміни, способи обміну та сервісне обслуговування.'
      },
      { property: 'og:image', content: '/assets/og-warranty.jpg' },
      { property: 'og:url', content: 'https://mini-yozetka.com/warranty' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}