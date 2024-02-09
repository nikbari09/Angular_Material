import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  c2:number=0;

  @Output() event1= new EventEmitter<number>();

  sendData(){
    this.event1.emit(this.c2);
  }
}
