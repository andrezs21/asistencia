import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.page.html',
  styleUrls: ['./professor-profile.page.scss'],
})
export class ProfessorProfilePage implements OnInit {
  receivedUser: string | undefined;
  receivedPass: string | undefined;


  }

  ngOnInit() {}

  volver() {
    this.router.navigate(['/login']);
  }

  navegar(asignatura: string) {
    this.router.navigate(['/asignatura', asignatura]);
  }
}
