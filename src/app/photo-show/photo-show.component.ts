import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.scss']
})
export class PhotoShowComponent implements OnInit {

  photoInfo!: any;
  photoUrl!: string;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    // this.photosService.getPhotos().subscribe(data=>{
    //   console.log(data);
    //   console.log(data.urls.regular); // now works fine!;
    //   this.photoInfo = data;
    //   console.log(this.photoInfo.urls.regular);

    //   this.photoUrl = data.urls.regular;
    // })
  }

  fetchImage(){
    this.photosService.getPhotos().subscribe(data=>{
      console.log(data);
      console.log(data.urls.regular); // now works fine!;
      this.photoInfo = data;
      console.log(this.photoInfo.urls.regular);

      this.photoUrl = data.urls.regular;
    })
  }

}
