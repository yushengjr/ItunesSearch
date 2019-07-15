import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKeyEnter]'
})
export class KeyEnterDirective {
  @Input('appKeyEnter') search: any;
  @Output() keyEnter = new EventEmitter<void>();
  constructor() { }
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    this.onEnterPress(event.code);
  }

  private onEnterPress(keycode: string) {
    if (keycode === 'Enter') {
      this.keyEnter.emit();
    }
  }

}
