import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-oninit',
  templateUrl: './parent-oninit.component.html',
  styleUrls: ['./parent-oninit.component.css']
})
export class ParentOninitComponent implements OnInit{
  
  constructor(){
    console.log('parent constructor');
    
  }

  p1 !:string;

  check(temp:string){
    this.p1=temp;
  }

  ngOnInit(): void {
    console.log('oninit from parent is called');
    
  }

}
