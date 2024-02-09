import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1-task',
  templateUrl: './child1-task.component.html',
  styleUrls: ['./child1-task.component.css']
})
export class Child1TaskComponent {
  @Input() c1!:number;

}
