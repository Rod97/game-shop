import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  email:string;
  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  sendRecoveryEmail(){
    this.login.recoverPassword(this.email).subscribe(data =>{
      alert(data);
    });
  }
}
