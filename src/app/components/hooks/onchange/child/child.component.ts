import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  @Input() c1 !:number;
  constructor(){
    console.log('child constructor called.');
  }
  ngOnChanges(){
    console.log('ngOnChange called');
    
  }


}
