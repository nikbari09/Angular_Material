import { Component } from '@angular/core';

interface Emp{
  id:number;
  name:string;
  gender:string;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent {
  employee:Emp[]=[
    {id:1,name:'nikhil',gender:'male'},
    {id:2,name:'kaushiki',gender:'female'},
    {id:3,name:'azim',gender:'male'}
  ];

}
