import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-onchange',
  templateUrl: './parent-onchange.component.html',
  styleUrls: ['./parent-onchange.component.css']
})
export class ParentOnchangeComponent {

  p1 !:number;

  sendData(value:number){
    this.p1=value;
  }
}
