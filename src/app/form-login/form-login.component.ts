import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ApiLogin, UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  token: String = "truc";
  userForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ''
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['username'],100
    );
    this.userService.login(newUser.getName()).subscribe((data:Boolean) => {
      if(data){
        this.router.navigate(['home']);
      }
    });;
  }
}


