import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LazyLoadDirective } from '../../directives/lazy-load.directive';
import { RouterModule } from '@angular/router';
import { artworks, GalleryItem } from '../../data/artwork';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    Isotope: any;
    imagesLoaded: any;
  }
}

@Component({
  selector: 'app-gallery',
  imports: [LazyLoadDirective, RouterModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('galleryContainer') galleryContainer!: ElementRef;
  
  public allItems: GalleryItem[] = artworks;
  public displayedItems: GalleryItem[] = [];
  
  private readonly ITEMS_PER_BATCH = 12;
  private currentBatch = 0;
  private scrollObserver?: IntersectionObserver;
  private loadMoreTrigger?: HTMLElement;
  private isotopeInstance: any;
  private imageLoadCount = 0;

  ngOnInit() {
    this.loadMoreItems();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initIsotope();
      this.setupInfiniteScroll();
    }, 300);
  }

  private loadMoreItems() {
    const startIndex = this.currentBatch * this.ITEMS_PER_BATCH;
    const endIndex = startIndex + this.ITEMS_PER_BATCH;
    const newItems = this.allItems.slice(startIndex, endIndex);
    
    if (newItems.length > 0) {
      this.displayedItems = [...this.displayedItems, ...newItems];
      this.currentBatch++;
      
      setTimeout(() => {
        this.relayoutIsotope();
      }, 100);
    }
  }

  private initIsotope() {
    if (typeof window !== 'undefined' && window.Isotope) {
      const gridElement = this.galleryContainer.nativeElement;
      
      this.isotopeInstance = new window.Isotope(gridElement, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
          columnWidth: '.portfolio-item',
          gutter: 20
        }
      });

      if (window.imagesLoaded) {
        window.imagesLoaded(gridElement).on('progress', () => {
          this.isotopeInstance?.layout();
        });
      }
    }
  }

  private relayoutIsotope() {
    if (this.isotopeInstance) {
      const gridElement = this.galleryContainer.nativeElement;
      
      setTimeout(() => {
        if (window.imagesLoaded) {
          window.imagesLoaded(gridElement).on('progress', () => {
            this.isotopeInstance.reloadItems();
            this.isotopeInstance.layout();
          });
        } else {
          this.isotopeInstance.reloadItems();
          this.isotopeInstance.layout();
        }
      }, 150);
    }
  }

  onImageLoad() {
    this.imageLoadCount++;
    if (this.isotopeInstance) {
      this.isotopeInstance.layout();
    }
  }

  private setupInfiniteScroll() {
    setTimeout(() => {
      this.loadMoreTrigger = document.getElementById('load-more-trigger') as HTMLElement;
      
      if (this.loadMoreTrigger) {
        this.scrollObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.displayedItems.length < this.allItems.length) {
              this.loadMoreItems();
            }
          });
        }, {
          rootMargin: '300px'
        });

        this.scrollObserver.observe(this.loadMoreTrigger);
      }
    }, 500);
  }

  get hasMoreItems(): boolean {
    return this.displayedItems.length < this.allItems.length;
  }

  ngOnDestroy() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
    if (this.isotopeInstance) {
      this.isotopeInstance.destroy();
    }
  }
}
