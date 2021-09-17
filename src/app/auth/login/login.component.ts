import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['test@email.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  login() {
    const {email, password} = this.myForm.value;
    if (email == "test@email.com" && password == 123456)
    {
      this.router.navigateByUrl('/protected/dashboard');
    }
      
    // this.authService.login(email, password)
    //   .subscribe(isSuccess => {
    //     // this is because may come an object through map operator of authService
    //     if (isSuccess === true) {
    //       this.router.navigateByUrl('/protected/dashboard');
    //     } else {
    //       console.log('Error')
    //     }
    //   });
    // this.router.navigateByUrl('/dashboard');
  }

}
