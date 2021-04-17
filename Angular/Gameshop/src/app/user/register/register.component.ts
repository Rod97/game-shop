import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  model=new User('','','','','',0,'',new Date());

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  submit(){
    this.registerService.CreateUser(this.model).subscribe(data=>{
      console.log('User added');
      console.log(data);
    })
  }

  //formats input for name fields to autocapitalize first letter
  firstnameuppercase(value:string){
    if(value.length>0){
      this.model.firstname=value.charAt(0).toUpperCase()+value.slice(1);
    }else{
      this.model.firstname=value;
    }
  }
  lastnameuppercase(value:string){
    if(value.length>0){
      this.model.lastname=value.charAt(0).toUpperCase()+value.slice(1);
    }else{
      this.model.lastname=value;
    }
  }
}
