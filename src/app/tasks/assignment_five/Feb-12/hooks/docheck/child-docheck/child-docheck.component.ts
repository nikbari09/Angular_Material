import { Component, Input ,DoCheck} from '@angular/core';

@Component({
  selector: 'app-child-docheck',
  templateUrl: './child-docheck.component.html',
  styleUrls: ['./child-docheck.component.css']
})
export class ChildDocheckComponent implements DoCheck{

  @Input() c1!:string;

  ngDoCheck(): void {
    console.log("Docheck called form child.");
    
  }


}
