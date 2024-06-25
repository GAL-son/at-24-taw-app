import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[placeholderImage]',
  standalone: true
})
export class PlaceholderImageDirective {

  constructor(private el: ElementRef) { }

  @HostListener('error')
  private onError() {    
    this.el.nativeElement.src = "assets/noImageIcon.png";
  }
}
