import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') mouseEnter(){
    this.Highlight('red');
  }

  @HostListener('mouseleave') mouseLeave(){
    this.Highlight('green');
  }

  private Highlight(color:string){
    this.ele.nativeElement.style.color=color;
    
  }

}
