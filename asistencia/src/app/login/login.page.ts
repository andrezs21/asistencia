

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


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
