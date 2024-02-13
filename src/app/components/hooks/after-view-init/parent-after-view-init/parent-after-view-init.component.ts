import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-parent-after-view-init',
  templateUrl: './parent-after-view-init.component.html',
  styleUrls: ['./parent-after-view-init.component.css']
})
export class ParentAfterViewInitComponent implements AfterViewInit{

  p1 !:string;

  onbtnsubmit(value:HTMLInputElement)
{
  this.p1=value.value;
}

ngAfterViewInit(){
  console.log('@@@@@@@@@@@@PARENT@@@@@@@@@@@@');
  
  console.log('PARENT---ngAfterViewInit hook called.');
 }
}
