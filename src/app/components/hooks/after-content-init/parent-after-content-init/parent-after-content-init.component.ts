import { AfterContentInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-after-content-init',
  templateUrl: './parent-after-content-init.component.html',
  styleUrls: ['./parent-after-content-init.component.css']
})
export class ParentAfterContentInitComponent implements AfterContentInit{

  p1!:string;

  check(ref:HTMLInputElement){
    this.p1=ref.value;
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit from parent.');
  }




}
