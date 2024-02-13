import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-parent-after-view-checked',
  templateUrl: './parent-after-view-checked.component.html',
  styleUrls: ['./parent-after-view-checked.component.css']
})
export class ParentAfterViewCheckedComponent implements AfterViewChecked {

  p1!:string;

  onbtnsubmit(value:HTMLInputElement){
    this.p1=value.value;
  }

  ngAfterViewChecked(){
    console.log('PARENT---ngAfterViewChecked hook called.');
  }

}
