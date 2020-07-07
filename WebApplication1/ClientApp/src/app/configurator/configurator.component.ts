import { Component, OnInit, Inject } from '@angular/core';
import { Tire } from '../_shared/tire';
import { HttpClient } from '@angular/common/http';
import { Style } from '../_shared/style';
import { Type } from '../_shared/type';
import { Manufacturer } from '../_shared/manufacturer';
import { _Location } from '../_shared/locationmodel';
import { TireserviceComponent } from '../_services/tireservice/tireservice.component';
import { LocationserviceComponent } from '../_services/locationservice/locationservice.component';
import { StyleserviceComponent } from '../_services/styleservice/styleservice.component';
import { ManufacturerserviceComponent } from '../_services/manufacturerservice/manufacturerservice.component';
import { TypeserviceComponent } from '../_services/typeservice/typeservice.component';




@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  public tires: Tire[];  
  public tireService: TireserviceComponent;
  public typeService: TypeserviceComponent;
  //public styles: Style[];
  public styleService: StyleserviceComponent;
  //public manufacturers: Manufacturer[];
  public manufacturerService: ManufacturerserviceComponent;
  //public locations: _Location[];
  public locationService: LocationserviceComponent;

  public GET_ALL_TIRES_URL: string = 'https://localhost:44382/api/Tires';
  public GET_ALL_TYPES_URL: string = 'https://localhost:44382/api/Types';
  public GET_ALL_STYLES_URL: string = 'https://localhost:44382/api/Styles';
  public GET_ALL_MANUFACTURERS_URL: string = 'https://localhost:44382/api/Manufacturers';

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tire[]>(baseUrl + 'api/Tires').subscribe(result => {
      this.tires = result;
    }, error => console.error(error));
  }

  types = this.typeService.getTypes();
  styles = this.styleService.getStyles();
  manufacturers = this.manufacturerService.getManufacturers();
  locations = this.locationService.getLocations();

  ngOnInit() {}
}
