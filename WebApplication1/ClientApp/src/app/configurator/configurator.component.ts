import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  public currentURL = document.location.href;
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

  getTypes(): void {
    this.http.get<Type[]>(this.currentURL + 'api/TireTypes')
      .subscribe(types => this.types = types);
      //.subscribe(types => this.types = types.filter(x => x.id == 11));
  }

  getStyles(): void {
    this.http.get<Style[]>(this.currentURL + 'api/TireStyles')
      .subscribe(styles => this.styles = styles);
  }

  getManufacturers(): void {
    this.http.get<Manufacturer[]>(this.currentURL + 'api/Manufacturers')
      .subscribe(manufacturers => this.manufacturers = manufacturers);
  }

  getLocations(): void {
    this.http.get<_Location[]>(this.currentURL + 'api/Locations')
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

  cancel() {
    this.cancelUpdate.emit(false);
  }


}
