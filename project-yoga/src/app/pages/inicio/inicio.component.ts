import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(public constants: Constants,
    private router: Router) { }

  ngOnInit(): void {
  }

  public redireccionar(ruta: string) {
    this.router.navigate([ruta]);
  }

}
