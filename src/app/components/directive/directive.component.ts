import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
 islog:boolean=true ;

 switch_expression!:number;

 arr:number[]=[10,20,30,40,50,60];

 isdisable:boolean=true;

 ishidden:boolean=false;

 ischeck:boolean=true;
 iscolor=this.ischeck?'red':'green';

 isUpperCase:boolean=true;


}
