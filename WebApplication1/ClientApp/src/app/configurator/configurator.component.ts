import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { Tire } from '../_shared/tire';
import { DOCUMENT } from '@angular/common';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Style } from '../_shared/style';
import { Type } from '../_shared/type';
import { Manufacturer } from '../_shared/manufacturer';
import { _Location } from '../_shared/locationmodel';
import { Tireservice } from '../_services/tireservice';
import { Locationservice } from '../_services/locationservice';
import { Styleservice } from '../_services/styleservice';
import { Manufacturerservice} from '../_services/manufacturerservice';
import { Typeservice } from '../_services/typeservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TireOption } from '../_shared/TireOption';
import { CarService } from '../_services/carService';
import { CarModel } from '../_shared/car';


@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  public currentURL = document.location.href;
  public tires: Tire[];
  public tiresTemp: any;
  public tireService: Tireservice;
  public typeService: Typeservice;
  public carService: CarService;
  public types: Type[];
  public styles: Style[];
  public styleService: Styleservice;
  public manufacturers: Manufacturer[];
  public cars: CarModel[];
  public manufacturerService: Manufacturerservice;
  public locations: _Location[];
  public locationService: Locationservice;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  public errorMessage = '';
  @Output() cancelUpdate = new EventEmitter();
  
  constructor(@Inject('BASE_URL') baseUrl, private http: HttpClient) {
    http.get<Tire[]>(baseUrl + 'api/Tires')
      .subscribe(result => {
      this.tires = result;
      }, error => console.error(error));

    console.log(baseUrl);
  }

  getTypes(t1: Text): void {
    this.http.get<Type[]>(this.currentURL + 'api/TireTypes')
      .subscribe(types => this.types = types);
      //.subscribe(types => this.types = types.filter(x => x.id == 11));
  }

  getStyles(t1: Text): void {
    this.http.get<Style[]>(this.currentURL + 'api/TireStyles')
      .subscribe(styles => this.styles = styles);
  }

  getManufacturers(t1: Text): void {
    this.http.get<Manufacturer[]>(this.currentURL + 'api/Manufacturers')
      .subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  getLocations(): void {
    this.http.get<_Location[]>(this.currentURL + 'api/Locations')
      .subscribe(locations => this.locations = locations);
  }

  getCars(): void {
    this.http.get<CarModel[]>(this.currentURL + 'api/CarModels')
      .subscribe(cars => this.cars = cars);
  }

  ngOnInit() {
    this.getTypes(" ");
    this.getStyles();
    this.getManufacturers();
    this.getLocations();
    this.getCars();
  }

  showOptions1(t1: Text,t2: Text) {

    var carTemp = new CarModel();
    carTemp.Make = t1;
    carTemp.Model = t2;

    return this.http.post(this.currentURL + 'api/CarModels/getTiresForCar', carTemp).subscribe();
  }

  showOptions2(t1: Text, t2: Text, t3: Text) {

    var tempTire = new TireOption();
    tempTire.TireType = t1;
    tempTire.TireStyle = t2;
    tempTire.TireManufacturer = t3;

    return this.http.post(this.currentURL + 'api/Tires/getAvailableTires', tempTire).subscribe(res => this.tiresTemp = res);
  }
 
  cancel() {
    this.cancelUpdate.emit(false);
  }


}
