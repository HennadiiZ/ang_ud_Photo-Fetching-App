import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  // root - https://api.unsplash.com/
  // Access Key - RMBiZd_sgg8eMnnh-g-TIMkJl60JPApgbKX7NQfKeRM
  // Secret key - Bsdpkjq85qCRku257osoqHSoE5s9t59FtakW0pJ9GMk
  // randomPhoto - https://api.unsplash.com/photos/random

  root = 'https://api.unsplash.com/photos/?client_id=';
  accessKey = 'RMBiZd_sgg8eMnnh-g-TIMkJl60JPApgbKX7NQfKeRM';
  SecretKey = 'Bsdpkjq85qCRku257osoqHSoE5s9t59FtakW0pJ9GMk';
  randomPhoto = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) { }

  getPhotos() {

    // return  this.http.get(this.root + this.accessKey) // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] - array of these random objects

    return  this.http.get(this.randomPhoto, {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`
      }
    }) // {id: 'RhweTADDcKo', created_at: '2022-05-26T09:00:58-04:00', updated_at: '2022-06-14T05:28:32-04:00', promoted_at: '2022-05-27T23:08:01-04:00' ...
  }

}
