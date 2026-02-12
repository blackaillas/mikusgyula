import { Directive, ElementRef, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() appLazyLoad: string = '';
  @Output() imageLoaded = new EventEmitter<void>();
  
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage();
          this.observer?.unobserve(this.el.nativeElement);
        }
      });
    }, {
      rootMargin: '50px'
    });

    this.observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    const imgElement: HTMLImageElement = this.el.nativeElement;
    
    const img = new Image();
    img.onload = () => {
      imgElement.src = this.appLazyLoad;
      this.imageLoaded.emit();
    };
    img.onerror = () => {
      console.error('Failed to load image:', this.appLazyLoad);
      imgElement.src = this.appLazyLoad;
    };
    img.src = this.appLazyLoad;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}