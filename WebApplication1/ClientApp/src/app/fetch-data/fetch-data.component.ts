import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public tires: Tire[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tire[]>(baseUrl + 'api/Tires').subscribe(result => {
      this.tires = result;
    }, error => console.error(error));
  }
}

interface Tire {
  id: number;
  typeId: number
  manufacturerId: number;
  styleId: number;
  width: number;
  height: number;
  rimSize: number;
  locationId: number;
}
