import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { RouterModule } from '@angular/router';
import { artworks, GalleryItem } from '../../data/artwork';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, HeroComponent, HeroComponent, TestimonialsComponent, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public homeGalleryItems = this.getRandomItems(artworks, 12);

  private getRandomItems(array: GalleryItem[], count: number): GalleryItem[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
