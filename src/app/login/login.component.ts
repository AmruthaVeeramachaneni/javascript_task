import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.value.email == 'user@gmail.com' && loginForm.value.password == '123456') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Email or Password doesn\'t match!');
    }
  }

}
