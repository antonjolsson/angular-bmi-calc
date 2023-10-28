import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-meter',
  templateUrl: './bmi-meter.component.html',
  styleUrls: ['./bmi-meter.component.scss']
})

export class BmiMeterComponent {
  numericLabelMap = new Map<number, string>([
    [100 * 2.5 / 16.5, '18.5'],
    [100 * 9 / 16.5, '25.0'],
    [100 * 14 / 16.5, '30.0']])

  classLabelMap = new Map<number, string>([
    [7.6, 'underweight'],
    [34.8, 'normal-weight'],
    [69.6, 'overweight'],
    [92.4, 'obesity']])
}

