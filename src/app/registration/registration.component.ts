import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userDetails = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '' ,
    mobileNumber: '' ,
    password: '',
    confirmPassword: ''
  }
  passwordMatch: boolean = false;
  @ViewChild('registrationForm', {static: false}) regForm: NgForm;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.regForm.value.password !== this.regForm.value.confirmPassword) {
      alert('Password doesn\'t Match!');
    } else {
      this.router.navigate(['/login']);
    }
  }

}
