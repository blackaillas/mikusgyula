import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-mikus-120',
  imports: [RouterModule],
  templateUrl: './mikus-120.component.html'
})
export class Mikus120Component implements OnInit {
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);


  ngOnInit(): void {
   
  }

}
