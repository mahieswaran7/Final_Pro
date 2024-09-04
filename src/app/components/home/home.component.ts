import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'demo-carousel-captions',
  templateUrl: './captions.html'
})
export class HomeComponent {
  images = [
    { src: 'assets/images/slider1.jpg', alt: 'Resort Image 1' },
    { src: 'assets/images/slider2.jpg', alt: 'Resort Image 2' },
    { src: 'assets/images/slider3.jpg', alt: 'Resort Image 3' },
    // Add more images as needed
  ];
}
