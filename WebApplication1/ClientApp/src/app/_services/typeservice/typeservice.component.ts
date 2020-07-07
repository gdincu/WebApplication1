import { Component, OnInit, Injectable } from '@angular/core';
import { Type } from '../../_shared/type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-typeservice',
  templateUrl: './typeservice.component.html',
  styleUrls: ['./typeservice.component.css']
})
export class TypeserviceComponent{

  private url = 'https://localhost:44382/api/Types';
  types: Array<Type>;

  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return this.http
      .get<Array<Type>>(this.url);
  }

  getType(id: number): Observable<Type[]> {
    return this.getTypes()
      .map(types => types.filter(type => type.id === id));
  }

  public save(type: Type) {
    this.http.post(this.url, type).subscribe(_ => window.location.reload());
  }

  update(type): Observable<Type> {
    const url = `${this.url}/${type.id}`;
    return this.http
      .put<Type>(url, type);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}
