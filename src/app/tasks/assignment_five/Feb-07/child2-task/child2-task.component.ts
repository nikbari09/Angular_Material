import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2-task',
  templateUrl: './child2-task.component.html',
  styleUrls: ['./child2-task.component.css']
})
export class Child2TaskComponent {
  c2:number=0;

  @Output() event1= new EventEmitter<number>();

  sentData(){
    this.event1.emit(this.c2);
  }

}
