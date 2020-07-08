import { Component, OnInit, Injectable } from '@angular/core';
import { CarModel } from '../_shared/car';
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
export class CarService{

  public currentURL = document.location.href;
  cars: Array<CarModel>;

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarModel[]> {
    return this.http
      .get<Array<CarModel>>(this.currentURL + 'api/CarModels');
  }

  getTire(id: number): Observable<CarModel[]> {
    return this.getCars()
      .map(tires => tires.filter(tire => tire.Id === id));
  }

  public save(tire: CarModel) {
    this.http.post(this.currentURL + 'api/CarModels', tire).subscribe(_ => window.location.reload());
  }

  update(car): Observable<CarModel> {
    const url = `${this.currentURL + 'api/CarModels'}/${car.id}`;
    return this.http
      .put<CarModel>(url, car);
  }

  delete(id: number): Observable<any> {
    const url = `${this.currentURL + 'api/CarModels'}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

  showOptions(t1: Text, t2: Text){
    
    var carTemp = new CarModel();
    carTemp.Make = t1;
    carTemp.Model = t2;

    return this.http.post(this.currentURL + 'api/CarModels/getTiresForCar', carTemp).subscribe();
  }

}

