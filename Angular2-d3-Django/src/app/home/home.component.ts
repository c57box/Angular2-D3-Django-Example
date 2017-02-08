import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;

  constructor(private homeservice: HomeService) {}

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.homeservice.getServerData().then(chartData => this.chartData = chartData);

      // change the data periodically
      setInterval(() => this.homeservice.getServerData().then(chartData => this.chartData = chartData), 3000);
    }, 1000);
  }
}
