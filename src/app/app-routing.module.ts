import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
