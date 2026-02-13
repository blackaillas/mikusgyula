import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
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
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('galleryContainer') galleryContainer!: ElementRef;
  
  public allItems: GalleryItem[] = artworks;
  public displayedItems: GalleryItem[] = [];
  
  private readonly ITEMS_PER_BATCH = 12;
  private currentBatch = 0;
  private isotopeInstance: any;
  public isLoading = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadMoreItems();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initIsotope();
    }, 500);
  }

  public loadMoreItems() {
    if (this.isLoading) {
      return;
    }
    
    const startIndex = this.currentBatch * this.ITEMS_PER_BATCH;
    const endIndex = startIndex + this.ITEMS_PER_BATCH;
    const newItems = this.allItems.slice(startIndex, endIndex);
    
    if (newItems.length > 0) {
      this.isLoading = true;
      this.displayedItems = [...this.displayedItems, ...newItems];
      this.currentBatch++;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.reinitIsotope();
      }, 300);
    }
  }

  private initIsotope() {
    if (typeof window !== 'undefined' && window.Isotope && window.imagesLoaded) {
      const gridElement = this.galleryContainer.nativeElement;
      
      window.imagesLoaded(gridElement, () => {
        if (this.isotopeInstance) {
          this.isotopeInstance.destroy();
        }
        
        this.isotopeInstance = new window.Isotope(gridElement, {
          itemSelector: '.portfolio-item',
          layoutMode: 'masonry',
          percentPosition: true,
          masonry: {
            columnWidth: '.portfolio-item',
            gutter: 20
          },
          transitionDuration: '0.3s'
        });
        
        this.isLoading = false;
        this.cdr.detectChanges();
      });
    }
  }

  private reinitIsotope() {
    if (typeof window !== 'undefined' && window.Isotope && window.imagesLoaded) {
      const gridElement = this.galleryContainer.nativeElement;
      
      // Save scroll position before reinit
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Destroy existing instance
      if (this.isotopeInstance) {
        this.isotopeInstance.destroy();
        this.isotopeInstance = null;
      }
      
      // Wait for all images to load, then recreate Isotope
      window.imagesLoaded(gridElement, () => {
        this.isotopeInstance = new window.Isotope(gridElement, {
          itemSelector: '.portfolio-item',
          layoutMode: 'masonry',
          percentPosition: true,
          masonry: {
            columnWidth: '.portfolio-item',
            gutter: 20
          },
          transitionDuration: '0.3s'
        });
        
        // Restore scroll position after layout
        setTimeout(() => {
          window.scrollTo(0, scrollY);
          this.isLoading = false;
          this.cdr.detectChanges();
        }, 50);
      });
    } else {
      this.isLoading = false;
    }
  }

  onImageLoad() {
    // Not needed anymore
  }

  get hasMoreItems(): boolean {
    return this.displayedItems.length < this.allItems.length;
  }

  ngOnDestroy() {
    if (this.isotopeInstance) {
      this.isotopeInstance.destroy();
    }
  }
}
