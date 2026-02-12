import { Component } from '@angular/core';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';
import { RouterModule } from '@angular/router';
import { artworks, GalleryItem } from '../../data/artwork';

@Component({
  selector: 'app-gallery',
  imports: [LazyLoadDirective, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  public items: GalleryItem[] = artworks;
}
