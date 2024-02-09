import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  p1:number=0;
  p3:number=0;
  getData(p2:number){
    this.p3=p2;
  }

}
