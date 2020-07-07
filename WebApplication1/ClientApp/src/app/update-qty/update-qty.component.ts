import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Locationservice } from '../_services/locationservice';
import { DOCUMENT } from '@angular/common';
import { _Location } from '../_shared/locationmodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-qty',
  templateUrl: './update-qty.component.html',
  styleUrls: ['./update-qty.component.css']
})
export class UpdateQtyComponent implements OnInit {
  @Input() location: _Location;
  @Input() values: any;
  @Input() locationToShow: any;
  @Output() cancelUpdate = new EventEmitter();
  model: any = {};
  public url = new URL(this.document.location.href);
  public locations: _Location[];
  public GET_ALL_LOCATIONS_URL: string = 'https://localhost:44382/api/Locations';

  constructor(@Inject(DOCUMENT) private document: Document,
    private locationService: Locationservice,
    private http: HttpClient) { }

  ngOnInit() {
    console.log(this.values);
    console.log("LocationId: " + this.locationToShow);
  }

  getLocations(): void {
    this.http.get<_Location[]>(this.GET_ALL_LOCATIONS_URL)
      .subscribe(locations => this.locations = locations.filter(x => x.id == this.locationToShow));
  }

  save(location: _Location): void {
    this.locationService.update(location)
      .subscribe();
  }

  cancel() {
    this.cancelUpdate.emit(false);
  }

}
