import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControlName, FormControl} from '@angular/forms'
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  title="Login";
  login:FormGroup;

  constructor(private re:FormBuilder){
     this.login=this.re.group({
      username:['',[Validators.required,]],
     
      pass:['',[Validators.required,Validators.minLength(8)]]
     })
   
    
  }
  onSubmit(){
    console.log(this.login);
  }
}
