import { Component, OnInit, Injectable } from '@angular/core';
import { Tire } from '../_shared/tire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { TireOption } from '../_shared/TireOption';

@Injectable({
  providedIn: 'root'
})
export class Tireservice{

  public currentURL = document.location.href;
  tires: Array<Tire>;
  public tireService: Tireservice;

  constructor(private http: HttpClient) { }

  getTires(): Observable<Tire[]> {
    return this.http
      .get<Array<Tire>>(this.currentURL + 'api/Tires');
  }

  getTire(id: number): Observable<Tire[]> {
    return this.getTires()
      .map(tires => tires.filter(tire => tire.id === id));
  }

  public save(tire: Tire) {
    this.http.post(this.currentURL + 'api/Tires', tire).subscribe(_ => window.location.reload());
  }

  update(tire): Observable<Tire> {
    const url = `${this.currentURL + 'api/Tires'}/${tire.id}`;
    return this.http
      .put<Tire>(url, tire);
  }

  delete(id: number): Observable<any> {
    const url = `${this.currentURL + 'api/Tires'}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

  showOptions(t1: Text, t2: Text, t3: Text){
    
    var tempTire = new TireOption();
    tempTire.TireType = t1;
    tempTire.TireStyle = t2;
    tempTire.TireManufacturer = t3;

    return this.http.post(this.currentURL + 'api/Tires/getAvailableTires', tempTire).subscribe();
  }

}

