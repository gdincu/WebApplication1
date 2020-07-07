import { Component, OnInit, Inject } from '@angular/core';
import { Tire } from '../_shared/tire';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Style } from '../_shared/style';
import { Type } from '../_shared/type';
import { Manufacturer } from '../_shared/manufacturer';
import { _Location } from '../_shared/locationmodel';
import { Tireservice } from '../_services/tireservice';
import { Locationservice } from '../_services/locationservice';
import { Styleservice } from '../_services/styleservice';
import { Manufacturerservice} from '../_services/manufacturerservice';
import { Typeservice } from '../_services/typeservice';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  public tires: Tire[];
  public tiresTemp: Tire[];
  public tireService: Tireservice;
  public typeService: Typeservice;
  public types: Type[];
  public styles: Style[];
  public styleService: Styleservice;
  public manufacturers: Manufacturer[];
  public manufacturerService: Manufacturerservice;
  public locations: _Location[];
  public locationService: Locationservice;

  public GET_ALL_TIRES_URL: string = 'https://localhost:44382/api/Tires';
  public GET_ALL_LOCATIONS_URL: string = 'https://localhost:44382/api/Locations';
  public GET_ALL_TYPES_URL: string = 'https://localhost:44382/api/Types';
  public GET_ALL_STYLES_URL: string = 'https://localhost:44382/api/Styles';
  public GET_ALL_MANUFACTURERS_URL: string = 'https://localhost:44382/api/Manufacturers';
  public errorMessage = '';
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tire[]>(baseUrl + 'api/Tires').subscribe(result => {
      this.tires = result;
    }, error => console.error(error));
  }

  getTypes(): void {
    this.http.get<Type[]>(this.GET_ALL_TYPES_URL)
      .subscribe(types => this.types = types);
      //.subscribe(types => this.types = types.filter(x => x.id == 11));
  }

  getStyles(): void {
    this.http.get<Style[]>(this.GET_ALL_STYLES_URL)
      .subscribe(styles => this.styles = styles);
  }

  getManufacturers(): void {
    this.http.get<Manufacturer[]>(this.GET_ALL_MANUFACTURERS_URL)
      .subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  getLocations(): void {
    this.http.get<_Location[]>(this.GET_ALL_LOCATIONS_URL)
      .subscribe(locations => this.locations = locations);
  }

  ngOnInit() {
    this.getTypes();
    this.getStyles();
    this.getManufacturers();
    this.getLocations();
  }

  showOptions(t1: Text, t2: Text, t3: Text): void {
    //returns names
    console.log(" Typelist: " + t1 + " Style: " + t2 + " Manufacturer: " + t3);

    //let tempss = selectedStyle;

    let typeId = this.types.filter(x => x.name === t1)[0].id;
    let styleId = this.styles.filter(x => x.name === t2)[0].id;
    let manufacturerId = this.manufacturers.filter(x => x.name === t3)[0].id;

    //returns ids
    console.log(typeId + " - " + styleId + " - " + manufacturerId);

    this.tiresTemp = this.tires.filter(x => x.typeId == typeId && x.styleId == styleId && x.typeId == typeId);

    //Stock

  }

  


}
