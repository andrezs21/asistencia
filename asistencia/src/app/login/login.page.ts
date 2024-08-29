import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  
   });

   

  navegar(){
    let navigationExtras: NavigationExtras = {
      state: { user: "pedro raven" }  // Aquí 'user' es un dato que se pasa al estado de la navegación
    };

    this.router.navigate(['/professor-profile'],navigationExtras);
  }

  irmenu(){   
    this.router.navigate(['/professor-profile']);
  }

  iniciarSesion(){

  }

  ngOnInit() {
  }

}
