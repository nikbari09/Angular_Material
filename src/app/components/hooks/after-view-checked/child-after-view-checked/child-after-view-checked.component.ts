import { AfterViewChecked, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-after-view-checked',
  templateUrl: './child-after-view-checked.component.html',
  styleUrls: ['./child-after-view-checked.component.css']
})
export class ChildAfterViewCheckedComponent implements AfterViewChecked{

  @Input() c1 !:string;

  @ViewChild('temp') tempPara !: ElementRef;

  @ContentChild('temp') paraContent !: ElementRef;

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Hook called.');
    console.log('=========================');
    
    console.log(this.paraContent.nativeElement.textContent);
  }

}
