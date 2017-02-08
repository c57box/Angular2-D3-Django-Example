import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'
import { HomeService } from './home/home.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeService]
})
export class AppComponent {
  title = 'Angular2 / D3.js V4 Test';
}
