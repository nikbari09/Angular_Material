import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-docheck',
  templateUrl: './parent-docheck.component.html',
  styleUrls: ['./parent-docheck.component.css']
})
export class ParentDocheckComponent {

  p1 !:string;

  check(value:string){
    this.p1=value;
  }

}
