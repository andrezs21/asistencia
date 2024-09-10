import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  usuario: FormGroup;

  constructor(private router: Router) {

    this.usuario = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    });
  }


  login() {
    if (this.usuario.valid) {
      const user = this.usuario.value.user;
      const pass = this.usuario.value.pass;


      this.router.navigate(['/professor-profile'], {
        state: { user, pass }
      });
    } else {
      alert('Por favor, ingresa el usuario y la contraseña correctamente.');
    }
  }
}
