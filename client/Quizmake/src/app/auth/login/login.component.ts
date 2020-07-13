import { AuthModule } from './../auth.module';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthModule ) { }

  ngOnInit(): void {
  }
  
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
  }

}
