import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.css'],
})
export class ToggleSliderComponent {
  @Input() isToggled: boolean = false;
  @Output() onToggle = new EventEmitter();
  toggle() {
    this.isToggled = !this.isToggled;
    this.onToggle.emit(this.isToggled);
  }
}
