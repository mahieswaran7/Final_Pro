import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms = [
    {
      name: 'Deluxe Room',
      description: 'A luxurious room with a king-sized bed, sea view, and all modern amenities.',
      image: 'assets/images/deluxe-room.jpg'
    },
    {
      name: 'Suite',
      description: 'Spacious suite with a living area, sea view, and premium services.',
      image: 'assets/images/suite.jpg'
    },
    {
      name: 'Standard Room',
      description: 'Comfortable room with a queen-sized bed, garden view, and essential amenities.',
      image: 'assets/images/standard-room.jpg'
    },
    {
      name: 'Family Room',
      description: 'A room perfect for families, with two queen-sized beds and a play area.',
      image: 'assets/images/family-room.jpg'
    },
    {
      name: 'Executive Room',
      description: 'A business-class room with a workspace, high-speed internet, and city views.',
      image: 'assets/images/executive-room.jpg'
    },
    {
      name: 'Penthouse Suite',
      description: 'The most luxurious suite, with a private terrace, hot tub, and panoramic views.',
      image: 'assets/images/penthouse-suite.jpg'
    }
  ];
}
