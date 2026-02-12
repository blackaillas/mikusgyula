import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { artworks, CategoryTitle, GalleryItem } from '../../data/artwork';

@Component({
  selector: 'app-gallery-item',
  imports: [RouterModule],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.scss'
})
export class GalleryItemComponent implements OnInit {
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);

  CategoryTitle = CategoryTitle;
  artwork: GalleryItem | null = null;
  sanitizedStory: SafeHtml | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const itemId = params.get('id');
      if (itemId) {
        this.artwork = artworks.find(artwork => artwork.id === Number(itemId)) || null;
        if (this.artwork?.story) {
          this.sanitizedStory = this.sanitizer.bypassSecurityTrustHtml(this.artwork.story);
        }
      }
    });
  }

  getYear(item: GalleryItem | null): string | null {
    const year = item?.title.match(/(\d{4})/);
    return year ? year[0] : null;
  }
}
