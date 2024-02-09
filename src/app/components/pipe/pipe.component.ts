import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  today:number= Date.now();

  msg:string='';

  arr:number[]=[20,10,40,60];
}
