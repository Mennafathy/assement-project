import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBackground]'
})
export class HoverBackgroundDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
}
