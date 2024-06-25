import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[hideEmptyImage]',
  standalone: true
})
export class HideEmptyImageDirective {

  constructor(private el: ElementRef) { }

  @Output() loadError = new EventEmitter();

  @HostListener('error')
  private onError() {
    this.el.nativeElement.style.display="none";
    setTimeout(() => {
      this.loadError.emit("");
    }, 1000);
  }
}
