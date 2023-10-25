import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() labelText = '';
  @Input() placeholder = -1;
  @Input() defaultValue = -1
  @Output() newChangeEvent = new EventEmitter<number>();
  @Output() newSubmitEvent = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    const currentValue = changes['defaultValue'].currentValue
    if (currentValue > -1) {
      this.newChangeEvent.emit(currentValue)
    }
  }

  onInput($event: Event) {
    this.newChangeEvent.emit(($event.currentTarget as HTMLInputElement).valueAsNumber)
  }

  onKeyDown($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.newSubmitEvent.emit()
    }
  }
}
