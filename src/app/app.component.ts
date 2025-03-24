import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyAngular';
  imageURL = '../assets/BL_logo_square_jpg.jpg';

  ngOnInit(): void {
    console.log('Hello from ngOnInit');
    this.title = 'Hello from BridgeLabz.';
  }
}