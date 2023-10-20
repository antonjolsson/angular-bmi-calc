import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-compute-btn',
  templateUrl: './compute-btn.component.html',
  styleUrls: ['./compute-btn.component.scss']
})
export class ComputeBtnComponent {
  @Input() bmi = -1
  @Input() bmiEverChanged = false
  @Input() showResultSection = false
  @Output() newClickEvent = new EventEmitter<void>();

  onClick() {
    this.newClickEvent.emit()
  }

  getClassName() {
    return (this.bmi > 0 && !this.showResultSection) ? 'enabled'
      : (this.bmiEverChanged || this.showResultSection)
        ? 'disabled' : ''
  }
}
