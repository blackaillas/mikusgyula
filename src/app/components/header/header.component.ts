import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavVisible = signal(false);

  toggleNav() {
    this.isNavVisible.set(!this.isNavVisible());
  }

  closeNav() {
    this.isNavVisible.set(false);
  }

}
