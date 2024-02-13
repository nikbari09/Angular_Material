import { AfterContentInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-after-content-init',
  templateUrl: './child-after-content-init.component.html',
  styleUrls: ['./child-after-content-init.component.css']
})
export class ChildAfterContentInitComponent implements AfterContentInit{

  @Input() c1 !:string;

  @ViewChild('ref') temppare !:ElementRef;
  @ContentChild('ref') paracontent !:ElementRef;
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit hook called.');
    //console.log('In ngAfterContentInit paraContent',this.paracontent );
    //console.log('In ngAfterContentInit paraContent',this.paracontent.nativeElement);
    
  }
}
