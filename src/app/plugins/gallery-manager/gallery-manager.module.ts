import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryManagerRoutingModule } from './gallery-manager-routing.module';
import { GalleryDashboardComponent } from './gallery-dashboard/gallery-dashboard.component';
import { PhotoDataEditorComponent } from './photo-data-editor/photo-data-editor.component';


@NgModule({
  declarations: [GalleryDashboardComponent, PhotoDataEditorComponent],
  imports: [
    CommonModule,
    GalleryManagerRoutingModule
  ]
})
export class GalleryManagerModule { }
