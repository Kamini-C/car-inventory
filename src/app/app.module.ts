import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListCarsComponent } from './products/cars/list-cars/list-cars.component';
import { ViewCarComponent } from './products/cars/view-car/view-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCarsComponent,
    ViewCarComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
