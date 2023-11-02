import { Component } from '@angular/core';

const DEBUG_VERDICT_ON_LOAD = false

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

  defaultLengthValue = DEBUG_VERDICT_ON_LOAD ? 182 : -1;
  defaultHeightValue = DEBUG_VERDICT_ON_LOAD ? 173 : -1;
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
      if (DEBUG_VERDICT_ON_LOAD && !this.bmiEverChanged) {
        this.onButtonClick()
        this.bmiEverChanged = true
        return
      }
      this.bmiEverChanged = true
    } else {
      this.bmi = -1
    }
    this.showResultSection = false
  }

  onButtonClick() {
    if (this.bmi > -1) {
      this.showResultSection = true
    }
  }

  getVisibilityClass() {
    if (this.showResultSection) {
      return 'fade-in'
    }
    return 'hidden'
  }
}
