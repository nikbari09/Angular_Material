import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  value !:string;
  onClick(){
    console.log("Thanks for submiting.");
    this.value='Thanks for submitting.';
  }
}
