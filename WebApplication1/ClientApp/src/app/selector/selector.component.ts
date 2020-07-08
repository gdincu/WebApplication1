import { Component, OnInit } from '@angular/core';
import { Tire } from '../_shared/tire';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  updateMode = false;
  public tires: Tire[];
  public currentURL = document.location.href;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  updateToggle() {
    this.updateMode = true;
    console.log('updateMode set to true');
  }

  cancelUpdateMode(updateMode: boolean) {
    this.updateMode = updateMode;
  }
 
}
