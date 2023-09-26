import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bmi-calc';
  lengthUnit = 'cm';
  weightUnit = 'kg';
  lengthPlaceholder = 182;
  weightPlaceholder = 73;
}
