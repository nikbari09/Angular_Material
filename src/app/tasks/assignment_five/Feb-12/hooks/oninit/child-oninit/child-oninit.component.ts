import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-oninit',
  templateUrl: './child-oninit.component.html',
  styleUrls: ['./child-oninit.component.css']
})
export class ChildOninitComponent implements OnInit{
  

  @Input() c1 !:string;

  ngOnInit(){
    console.log('child oninit called.');
    
  }
  

}
