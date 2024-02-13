import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-after-view-init',
  templateUrl: './child-after-view-init.component.html',
  styleUrls: ['./child-after-view-init.component.css']
})
export class ChildAfterViewInitComponent implements AfterViewInit{

  @Input() c1!:string;

  @ViewChild('temp') tempPara !: ElementRef;
  
  @ContentChild('temp') paraContent!:ElementRef;

  ngAfterViewInit() {
    console.log('+++++++++++++++++++++++++++');
    console.log('ngAfterViewInit hook called.');
    console.log('in ngAfterViewInit',this.tempPara.nativeElement);
  }
}
