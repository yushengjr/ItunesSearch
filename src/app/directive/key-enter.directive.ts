import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appKeyEnter]'
})
export class KeyEnterDirective {
  @Input('appKeyEnter') search: any;
  constructor() { }
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    this.onEnterPress(event.code);
  }

  private onEnterPress(keycode: string) {
    if (keycode === 'Enter') {
      this.search();
    }
  }

}
