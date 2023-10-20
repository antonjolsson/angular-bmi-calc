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
  length = -1
  weight = -1
  bmi = -1
  bmiEverChanged = false
  showResultSection = false

  onLengthChange($event: number) {
    this.length = $event
    this.onInputChange()
  }

  onWeightChange($event: number) {
    this.weight = $event
    this.onInputChange();
  }

  private onInputChange() {
    if (this.length > 0 && this.weight > 0) {
      this.bmi = this.weight / Math.pow(this.length / 100, 2)
      this.bmiEverChanged = true
    } else {
      this.bmi = -1
    }
    console.log(this.bmi)
    this.showResultSection = false
  }

  onButtonClick() {
    if (this.bmi > -1) {
      this.showResultSection = true
    }
  }
}
