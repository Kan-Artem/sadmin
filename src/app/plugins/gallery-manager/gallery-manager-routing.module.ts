import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  GalleryDashboardComponent
} from "./gallery-dashboard/gallery-dashboard.component";

const routes: Routes = [
  {
    path: 'dashboard', component: GalleryDashboardComponent,
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryManagerRoutingModule { }
