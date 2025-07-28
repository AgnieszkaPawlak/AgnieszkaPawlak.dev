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
    path: 'books',
    loadComponent: () => import('@app/features/books/books.component').then(m => m.BooksComponent),
  },
  {
    path: 'ux-design',
    loadComponent: () => import('@app/features/ux-design/ux-design.component').then(m => m.UxDesignComponent),
  },
  {
    path: 'articles',
    loadComponent: () => import('@app/features/articles/articles.component').then(m => m.ArticlesComponent),
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
