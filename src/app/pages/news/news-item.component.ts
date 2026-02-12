import { Component, inject, OnInit, ViewChild, ViewContainerRef, ComponentRef, Type, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryTitle, GalleryItem } from '../../data/artwork';
import { Mikus120Component } from './items/mikus-120.component';
import { OperahazComponent } from './items/operahaz.component';

@Component({
  selector: 'app-news-item',
  imports: [RouterModule],
  templateUrl: './news-item.component.html'
})
export class NewsItemComponent implements OnInit, AfterViewInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);

  CategoryTitle = CategoryTitle;
  artwork: GalleryItem | null = null;
  sanitizedStory: SafeHtml | null = null;
  private componentRef: ComponentRef<any> | null = null;
  private pendingItemId: string | null = null;

  // Component registry - map itemId to component class
  private componentRegistry: { [key: string]: Type<any> } = {
    '120': Mikus120Component,
    'operahaz': OperahazComponent,
    // Add more mappings as you create more components:
    // 'item2': Item2Component,
    // 'item3': Item3Component,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const itemId = params.get('id');
      if (itemId) {
        this.pendingItemId = itemId;
        if (this.container) {
          this.loadDynamicComponent(itemId);
        }
      }
    });
  }

  ngAfterViewInit(): void {
    // Load component after view is initialized
    if (this.pendingItemId) {
      this.loadDynamicComponent(this.pendingItemId);
      this.pendingItemId = null;
    }
  }

  private loadDynamicComponent(itemId: string): void {
    // Clear previous component if exists
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    if (!this.container) {
      return;
    }

    // Get component from registry
    const component = this.componentRegistry[itemId];

    if (component) {
      // Load the component into the view container
      this.componentRef = this.container.createComponent(component);
    } else {
      console.error(`No component registered for itemId: ${itemId}`);
      // Optionally show a default/error component
    }
  }

  getYear(item: GalleryItem | null): string | null {
    const year = item?.title.match(/(\d{4})/);
    return year ? year[0] : null;
  }
}
