import { Component, OnInit, Injectable } from '@angular/core';
import { Manufacturer } from '../../_shared/manufacturer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-manufacturerservice',
  templateUrl: './manufacturerservice.component.html',
  styleUrls: ['./manufacturerservice.component.css']
})
export class ManufacturerserviceComponent{

  private url = 'https://localhost:44382/api/Manufacturers';
  manufacturers: Array<Manufacturer>;

  constructor(private http: HttpClient) { }

  getManufacturers(): Observable<Manufacturer[]> {
    return this.http
      .get<Array<Manufacturer>>(this.url);
  }

  getManufacturer(id: number): Observable<Manufacturer[]> {
    return this.getManufacturers()
      .map(manufacturers => manufacturers.filter(manufacturer => manufacturer.id === id));
  }

  public save(manufacturer: Manufacturer) {
    this.http.post(this.url, manufacturer).subscribe(_ => window.location.reload());
  }

  update(manufacturer): Observable<Manufacturer> {
    const url = `${this.url}/${manufacturer.id}`;
    return this.http
      .put<Manufacturer>(url, manufacturer);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}

