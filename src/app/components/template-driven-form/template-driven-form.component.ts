import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  name:string='';
  email:string='';
  password:string='';
  repassword:string='';
  address:string='';

 
  
  onSubmit(form:any){
    console.log('Entered data is : ',form);
   
  }
  
}
