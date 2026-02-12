import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent() {
            return import('./pages/home/home.component').then(m => m.HomeComponent);
        },
    },
    {
        path: 'muszak',
        loadComponent() {
            return import('./pages/muszak/muszak.component').then(m => m.MuszakComponent);
        },
    },
    {
        path: 'galeria',
        loadComponent() {
            return import('./pages/gallery/gallery.component').then(m => m.GalleryComponent);
        },
    },
    {
        path: 'galeria/:id',
        loadComponent() {
            return import('./pages/gallery-item/gallery-item.component').then(m => m.GalleryItemComponent);
        },
    },
    {
        path: 'hirek/:id',
        loadComponent() {
            return import('./pages/news/news-item.component').then(m => m.NewsItemComponent);
        },
    }
];
