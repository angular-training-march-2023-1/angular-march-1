import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
 // element is injected through the constructor, also called as constructor injection
  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  anyNameMouseEnter(): void{
    this.element.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseleave')
  anyNameMouseExit(): void{
    this.element.nativeElement.style.backgroundColor="initial";
  }

}
