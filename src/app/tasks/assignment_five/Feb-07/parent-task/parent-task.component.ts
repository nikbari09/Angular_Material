import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-task',
  templateUrl: './parent-task.component.html',
  styleUrls: ['./parent-task.component.css']
})
export class ParentTaskComponent {
p2:number=0;

getData(p1:number){
  this.p2=p1;

}
}
