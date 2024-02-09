import { Component } from '@angular/core';

export interface Empl{
  id:number;
  name:string;
  designation:string;
}
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  employees:Empl[]=[
    {id:1,name:'nikhil',designation:'Developer'},
    {id:2,name:'kaushiki',designation:'Developer'},
    {id:3,name:'azim',designation:'Developer'}
  ]

  search_term:string='';
}
