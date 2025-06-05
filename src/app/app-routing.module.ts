import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('@app/features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('@app/features/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'books',
    loadComponent: () => import('@app/features/books/books.component').then(m => m.BooksComponent),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
