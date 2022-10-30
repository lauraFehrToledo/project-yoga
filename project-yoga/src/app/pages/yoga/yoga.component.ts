import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent implements OnInit {

  constructor( public readonly constants: Constants,
    private router: Router) { }

  ngOnInit(): void {
  }

  public irContacto(): void {
    this.router.navigate(['/contacto']);
  }

}
