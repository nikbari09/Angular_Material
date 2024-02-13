import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-ondestroy',
  templateUrl: './child-ondestroy.component.html',
  styleUrls: ['./child-ondestroy.component.css']
})
export class ChildOndestroyComponent {

  @Input() c1!: string;
  @ViewChild('temp') tempPara!: ElementRef;
  @ContentChild('temp') paraContent!: ElementRef;

  constructor() { 
    console.log('child constructor call...')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Hook Called.-- child');
  }

}
