import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private elem: ElementRef) {}
  
    private quoteHighlight(action:string) {
      this.elem.nativeElement.style.backgroundColor='green';
    }

}
