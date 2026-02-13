import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, Scroll } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mikusgyula';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    // Handle fragment scrolling
    this.router.events.pipe(
      filter((event): event is Scroll => event instanceof Scroll)
    ).subscribe((event: Scroll) => {
      if (event.anchor) {
        // Wait for content to load, then scroll
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(event.anchor!);
        }, 100);
      } else if (event.position) {
        this.viewportScroller.scrollToPosition(event.position);
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
