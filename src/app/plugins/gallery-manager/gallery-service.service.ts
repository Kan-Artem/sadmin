import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { combineLatest } from 'rxjs/operators';

import { AuthService } from '../../auth.service';

export type photo = {
  id?: number;
  category?: string;
  desc?: string;
};

const postOptsJSON = {
  headers: new HttpHeaders({
   'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  getPhotos(page: number, retrieveData?: boolean, category?: string) {
    let url = `/api/gallery/get.php?page=${page}`;
    if (category) {
      url += `&category=${category}`;
    }

    if (retrieveData) {
      url += '&data=1';
    }

    return this.http.get<photo[]>(url);
  }

  remove(id: number) {
    return this.http.delete('/api/gallery/remove.php' +
      `?id=${id}&key=${this.auth.getKey()}`);
  }

  removeMany(ids: number[]) {
    return combineLatest(ids.map((id) => this.remove(id)));
  }

  update(id: number, changes: FormData) {
    const photo = { ...changes, id };
    changes.append('key', this.auth.getKey());
    return this.http.post('/api/gallery/update.php', photo, postOptsJSON);
  }

  // updateMany(ids: number[], changes: FormData[]) {
  // }

  upload(photo: FormData) {
    photo.append('key', this.auth.getKey());
    return this.http.post('/api/gallery/upload.php', photo, postOptsJSON);
  }

  // uploadMany(photos: FormData[]) {
  // }
}
