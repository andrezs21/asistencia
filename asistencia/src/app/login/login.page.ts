import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) {


 
   }

  irmenu(){   
    this.router.navigate(['/professor-profile']);
  }

  iniciarSesion(){

  }

  ngOnInit() {
  }

}
