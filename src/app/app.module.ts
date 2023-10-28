import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ComputeBtnComponent } from './compute-btn/compute-btn.component';
import { ResultSectionComponent } from './result-section/result-section.component';
import { BmiMeterComponent } from './result-section/bmi-meter/bmi-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ComputeBtnComponent,
    ResultSectionComponent,
    BmiMeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
