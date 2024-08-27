import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.page.html',
  styleUrls: ['./professor-profile.page.scss'],
})
export class ProfessorProfilePage implements OnInit {

  constructor(private router: Router) { }

  generar_qr(){
    this.router.navigate(['/generar-qr'])
  }

  volver(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
