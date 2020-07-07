import { Component, OnInit, Injectable } from '@angular/core';
import { _Location } from '../_shared/locationmodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class Locationservice {

  private url = 'https://localhost:44382/api/Locations';
  comments: Array<_Location>;

  constructor(private http: HttpClient) { }

  getLocations(): Observable<_Location[]> {
    return this.http
      .get<Array<_Location>>(this.url);
  }

  getLocation(id: number): Observable<_Location[]> {
    return this.getLocations()
      .map(locations => locations.filter(location => location.id === id));
  }

  public save(location: _Location) {
    this.http.post(this.url, location).subscribe(_ => window.location.reload());
  }

  update(location): Observable<_Location> {
    const url = `${this.url}/${location.id}`;
    return this.http
      .put<_Location>(url, location);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}
