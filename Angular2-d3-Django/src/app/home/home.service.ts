import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {
  constructor(private http: Http) { }

  private apiURL = 'http://127.0.0.1:8000/';
  
  getServerData() {
    return this.http.get(this.apiURL)
              .toPromise()
              .then(this.extractData)
              .catch(this.handleError);
  }

  private extractData(response: Response){
    response = response.json();
    var chartData = [];
    for(var v in response) {
        chartData.push([
        `Index ${v}`,
        Math.floor(response[v].val)
      ]);
    }
    return chartData
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
