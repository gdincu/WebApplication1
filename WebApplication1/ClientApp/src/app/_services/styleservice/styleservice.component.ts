import { Component, OnInit, Injectable } from '@angular/core';
import { Style } from '../../_shared/style';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-styleservice',
  templateUrl: './styleservice.component.html',
  styleUrls: ['./styleservice.component.css']
})
export class StyleserviceComponent implements OnInit {

  private url = 'https://localhost:44382/api/Styles';
  styles: Array<Style>;

  constructor(private http: HttpClient) { }

  getStyles(): Observable<Style[]> {
    return this.http
      .get<Array<Style>>(this.url);
  }

  getStyle(id: number): Observable<Style[]> {
    return this.getStyles()
      .map(styles => styles.filter(style => style.id === id));
  }

  public save(style: Style) {
    this.http.post(this.url, style).subscribe(_ => window.location.reload());
  }

  update(style): Observable<Style> {
    const url = `${this.url}/${style.id}`;
    return this.http
      .put<Style>(url, style);
  }

  delete(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    console.log("delete url: ", url);
    return this.http
      .delete(url);
  }

}

