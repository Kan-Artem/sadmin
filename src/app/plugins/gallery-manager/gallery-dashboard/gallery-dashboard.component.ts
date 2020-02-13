import { Component, OnInit } from '@angular/core';

import { GalleryService, photo } from '../gallery-service.service';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css']
})
export class GalleryDashboardComponent implements OnInit {
  photos: photo[] = [];

  constructor(private gservice: GalleryService) { }

  ngOnInit() {
    this.gservice.getPhotos(1)
      .subscribe((photos) => {
        this.photos = photos;
      });
  }

  remove(id: number | number[]) {
    if (Array.isArray(id)) {
      this.gservice.removeMany(id);
    } else {
      this.gservice.remove(id);
    }
  }
}
