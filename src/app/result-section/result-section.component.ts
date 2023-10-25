import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-result-section',
  templateUrl: './result-section.component.html',
  styleUrls: ['./result-section.component.scss']
})
export class ResultSectionComponent {
  @Input() bmi = -1
  @Input() length = -1
  @Input() visibilityClass = 'hidden'

  getVerdict(): string {
    if (this.bmi < 20) {
      return 'underweight'
    }
    if (this.bmi < 25) {
      return 'normal-weight'
    }
    if (this.bmi < 30) {
      return 'overweight'
    }
    return 'obesity'
  }

  getWeight(length: number, bmi: number): number {
    return bmi * Math.pow(length / 100, 2)
  }
}
