import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-compute-btn',
  templateUrl: './compute-btn.component.html',
  styleUrls: ['./compute-btn.component.scss']
})
export class ComputeBtnComponent {
  @Input() bmi = -1
  @Input() bmiEverChanged = false
}
