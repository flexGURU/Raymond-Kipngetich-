import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images = [
    "../../../assets/1.jpg",
    "../../../assets/2.jpg",
    "../../../assets/3.jpg",
    "../../../assets/4.jpg",
    "../../../assets/5.jpg",
    "../../../assets/8.jpg",
    "../../../assets/9.jpg",
    "../../../assets/10.jpg",
    "../../../assets/6.jpg",
    "../../../assets/7.jpg",

  ]

 
  selectedImage: string | null = null;

  openImageModal(image: string) {
    this.selectedImage = image;
  }

  // Close modal
  closeModal() {
    this.selectedImage = null;
  }



}
