import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.page.html',
  styleUrls: ['./professor-profile.page.scss'],
})
export class ProfessorProfilePage implements OnInit {
  receivedUser: string | undefined;
  receivedPass: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.receivedUser = navigation.extras.state['user'];
      this.receivedPass = navigation.extras.state['pass'];
    } else {
      this.receivedUser = 'Usuario desconocido';
      this.receivedPass = 'N/A';
    }
  }

  volver() {

    this.router.navigate(['/login']);
  }

  generar_qr() {

  }

  ngOnInit() {}
}
