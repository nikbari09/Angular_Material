import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-after-content-checked',
  templateUrl: './child-after-content-checked.component.html',
  styleUrls: ['./child-after-content-checked.component.css']
})
export class ChildAfterContentCheckedComponent {

  @Input() c1!: string;
  @ViewChild('temp') tempPara!: ElementRef;
  @ContentChild('temp') paraContent!: ElementRef;

  ngAfterContentChecked() {
    //   console.log('+++++++++++++++++++++++++++');
      console.log('ngAfterContentChecked hook called.');
      console.log('In ngAfterContentInit paraContent',this.paraContent);
      console.log('In ngAfterContentInit paraContent',this.paraContent.nativeElement);
  }
}
