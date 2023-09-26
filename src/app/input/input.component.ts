import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() labelText = '';
  @Input() placeholder = -1;
  @Output() newChangeEvent = new EventEmitter<number>();

  onInput($event: Event) {
    this.newChangeEvent.emit(($event.currentTarget as HTMLInputElement).valueAsNumber)
  }
}
