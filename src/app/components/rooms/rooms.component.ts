import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms = [
    {
      title: 'Deluxe Room',
      description: 'A luxurious room with a stunning view.',
      image: 'assets/slide1.jpg'
    },
    {
      title: 'Suite Room',
      description: 'Spacious suite with modern amenities.',
      image: 'assets/slide2.jpg'
    },
    {
      title: 'Standard Room',
      description: 'Comfortable room with all basic facilities.',
      image: 'assets/slide3.jpg'
    },
    {
      title: 'Executive Suite',
      description: 'An executive suite with premium facilities.',
      image: 'assets/slide4.jpg'
    },
    {
      title: 'Family Room',
      description: 'A large room suitable for families.',
      image: 'assets/slide5.jpg'
    },
    {
      title: 'Honeymoon Suite',
      description: 'A romantic suite perfect for newlyweds.',
      image: 'assets/slide6.jpg'
    },
    // {
    //   title: 'Presidential Suite',
    //   description: 'The most luxurious suite with top-class amenities.',
    //   image: 'assets/slide7.jpg'
    // },
    // {
    //   title: 'Single Room',
    //   description: 'A cozy room perfect for solo travelers.',
    //   image: 'assets/slide8.jpg'
    // },
    // {
    //   title: 'Double Room',
    //   description: 'A comfortable room for two guests.',
    //   image: 'assets/slide9.jpg'
    // },
    {
      title: 'Penthouse Suite',
      description: 'An exclusive suite with panoramic views.',
      image: 'assets/slide10.jpg'
    },
    {
      title: 'Garden Suite',
      description: 'A suite with a private garden.',
      image: 'assets/slide11.jpg'
    },
    {
      title: 'Ocean View Room',
      description: 'A room with breathtaking ocean views.',
      image: 'assets/slide12.jpg'
    }
  ];

  ngOnInit(): void {}
}
