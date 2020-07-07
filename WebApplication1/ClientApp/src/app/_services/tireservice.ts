import { Component, OnInit, Injectable } from '@angular/core';
import { Tire } from '../_shared/tire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class Tireservice{

  private url = 'https://localhost:44382/api/Tires';
  tires: Array<Tire>;

  constructor(private http: HttpClient) { }

  getTires(): Observable<Tire[]> {
    return this.http
      .get<Array<Tire>>(this.url);
  }

  getTire(id: number): Observable<Tire[]> {
    return this.getTires()
      .map(tires => tires.filter(tire => tire.id === id));
  }

  public save(tire: Tire) {
    this.http.post(this.url, tire).subscribe(_ => window.location.reload());
  }

  update(tire): Observable<Tire> {
    const url = `${this.url}/${tire.id}`;
    return this.http
      .put<Tire>(url, tire);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}

