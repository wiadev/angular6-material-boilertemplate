import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      isRememberEnabled: [true],
    });
  }

  ngOnInit() {
  }

  submit() {}

}
