import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  updateMode = false;

  constructor() { }

  ngOnInit() {
  }

  updateToggle() {
    this.updateMode = true;
    console.log('updateMode set to true');
  }

  update(updateMode: boolean) {
    this.updateMode = updateMode;
  }
}
