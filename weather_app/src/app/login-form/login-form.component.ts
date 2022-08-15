import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  submitted:boolean = false;

  model: User = new User(0, "", "");

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

}
