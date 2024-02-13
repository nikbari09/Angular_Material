import { AfterContentChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-after-content-checked',
  templateUrl: './parent-after-content-checked.component.html',
  styleUrls: ['./parent-after-content-checked.component.css']
})
export class ParentAfterContentCheckedComponent implements AfterContentChecked{

p1 !: string;

onbtnsubmit(value: HTMLInputElement){
  this.p1=value.value;
  }

  ngAfterContentChecked(){
    console.log('PARENT---ngAfterViewChecked hook called.');
  }

}
