import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { IncreaseQtyComponent } from './update/increase-qty/increase-qty.component';
import { UpdateQtyComponent } from './update/update-qty/update-qty.component';
import { Locationservice } from './_services/locationservice';
import { AlertifyService } from './_services/alertify.service';
import { SelectorComponent } from './selector/selector.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { Tireservice } from './_services/tireservice';
import { AuthenticationService } from './_services/auth.service';
import { Typeservice} from './_services/typeservice';
import { Styleservice} from './_services/styleservice';
import { Manufacturerservice} from './_services//manufacturerservice';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
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
      { path: 'increase-qty', component: IncreaseQtyComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [Locationservice, Tireservice, Typeservice, Manufacturerservice, Styleservice, AlertifyService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
