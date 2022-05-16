import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

//à mettre dans le app.module.ts :
//import {FormsModule} from '@angular/forms';
//import {HttpClientModule} from '@angular/common/http';
//import {AuthService} from './auth.service';
//imports: [FormsModule, HttpClientModule]
//providers: [AuthService]
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/top-bar']);
      },
      (err) => console.log(err)
    );
  }
}
