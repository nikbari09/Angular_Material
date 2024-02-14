import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit{

  constructor(){

  }
  ngOnInit(): void{
  }
    
  registerForm=new FormGroup({
    firstname: new FormControl("",[Validators.required,
                                    Validators.minLength(5)]),
    lastname: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  });

  public registerSubmitted(){
    console.log(this.registerForm);
  }
  get firstname(): FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }

  get lastname(): FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }

  get email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }

}
