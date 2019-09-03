import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDetails } from './userDetails.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedUser: UserDetails;
  currentIndex: number;
  userDetails: UserDetails[] = [];
  editMode: boolean = false;
  @ViewChild('f', {static: false}) userForm: NgForm;

  constructor() { }

  ngOnInit() {
    this.userDetails.push({
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    class: 'A',
    year: 2019,
    city: 'Hyd',
    country: 'India'
    })
  }

  onSubmitUserDetails() {
    if (this.editMode) {
      this.userDetails[this.currentIndex] = this.userForm.value;
      this.editMode = false;
    } else
    this.userDetails.push(this.userForm.value);
    this.userForm.resetForm();
  }

  onEditUser(index) {
    this.editMode = true;
    this.currentIndex = index;
    this.selectedUser = this.userDetails[index];
    this.userForm.setValue({
      id: this.selectedUser.id,
      name: this.selectedUser.name,
      email: this.selectedUser.email,
      class: this.selectedUser.class,
      year: this.selectedUser.year,
      city: this.selectedUser.city,
      country: this.selectedUser.country
    })
  }

  onClear() {
    this.userForm.resetForm();
    this.editMode = false;
  }

  onDeleteUser(index) {
    this.userDetails.splice(index, 1);
  }

}
