import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _Location } from '../_shared/locationmodel';
import { Locationservice} from '../_services/locationservice';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-increase-qty',
  templateUrl: './increase-qty.component.html',
  styleUrls: ['./increase-qty.component.css']
})
export class IncreaseQtyComponent implements OnInit {
  public locations: _Location[];
  values: any;
  locationToShow: number;
  updateMode = false;
  errorMessage: string;

  constructor(private locationService: Locationservice, private alertify: AlertifyService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<_Location[]>(baseUrl + 'api/Locations').subscribe(result => {
      this.locations = result;
    }, error => console.error(error));
  }

  updateToggle(location: _Location) {
    this.updateMode = true;
    this.locationToShow = location.id;
  }

  cancelUpdateMode(updateMode: boolean) {
    this.updateMode = updateMode;
    this.alertify.success('Locations List');
  }

  getlocations() {
    this.locationService.getLocations()
      .subscribe(
        locations => {
          this.locations = locations,
            this.values = locations,
            error => this.errorMessage = error as any
        }
      );
  }

  ngOnInit() {
    this.getlocations();
  }

}
