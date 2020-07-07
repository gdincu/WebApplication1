import { Component, OnInit, Inject } from '@angular/core';
import { Tire } from '../_shared/tire';
import { HttpClient } from '@angular/common/http';
import { Style } from '../_shared/style';
import { Type } from '../_shared/type';
import { Manufacturer } from '../_shared/manufacturer';
import { _Location } from '../_shared/locationmodel';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  public tires: Tire[];
  public types: Type[];
  public styles: Style[];
  public manufacturers: Manufacturer[];
  public locations: _Location[];
  public GET_ALL_TIRES_URL: string = 'https://localhost:44382/api/Tires';
  public GET_ALL_TYPES_URL: string = 'https://localhost:44382/api/Types';
  public GET_ALL_STYLES_URL: string = 'https://localhost:44382/api/Styles';
  public GET_ALL_MANUFACTURERS_URL: string = 'https://localhost:44382/api/Manufacturers';

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tire[]>(baseUrl + 'api/Tires').subscribe(result => {
      this.tires = result;
    }, error => console.error(error));
  }
  
  


  ngOnInit() {}
}
