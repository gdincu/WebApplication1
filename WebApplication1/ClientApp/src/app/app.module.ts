import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { IncreaseQtyComponent } from './increase-qty/increase-qty.component';
import { UpdateQtyComponent } from './update-qty/update-qty.component';
import { LocationserviceComponent } from './_services/locationservice/locationservice.component';
import { SelectorComponent } from './selector/selector.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { TireserviceComponent } from './_services/tireservice/tireservice.component';
import { TypeserviceComponent } from './_services/typeservice/typeservice.component';
import { StyleserviceComponent } from './_services/styleservice/styleservice.component';
import { ManufacturerserviceComponent } from './_services/manufacturerservice/manufacturerservice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    IncreaseQtyComponent,
    UpdateQtyComponent,
    SelectorComponent,
    ConfiguratorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'increase-qty', component: IncreaseQtyComponent },
    ])
  ],
  providers: [LocationserviceComponent, TireserviceComponent, TypeserviceComponent, ManufacturerserviceComponent, StyleserviceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
