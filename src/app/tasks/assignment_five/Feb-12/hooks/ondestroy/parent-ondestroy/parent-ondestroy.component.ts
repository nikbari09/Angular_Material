import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent-ondestroy',
  templateUrl: './parent-ondestroy.component.html',
  styleUrls: ['./parent-ondestroy.component.css']
})
export class ParentOndestroyComponent implements OnDestroy{

  p1!:string;
  toDestroy:boolean= false;

  constructor(){ 
    console.log('Parent Constructor call ---DestroyComponent');
  }

  onbtnsubmit(value:HTMLInputElement){
    this.p1= value.value;
  }
 
  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }

  ngOnDestroy(){
    console.log('Parent Destroy');
    
  }

}
