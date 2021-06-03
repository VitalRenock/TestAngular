import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSurligneur]'
})
export class SurligneurDirective {

  constructor(
    // Appel à lélément HTML sur lequel on travaille
    private el : ElementRef
  ) { }

  // HostListener => Ecoute un event
  @HostListener('mouseenter') mouseEnter() {
    this.surligner('red')
  }
  
  @HostListener('mouseleave') mouseLeave() {
    this.surligner('')
    
  }

  private surligner(color : string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
