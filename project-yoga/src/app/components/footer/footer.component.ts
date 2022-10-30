import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public readonly constants: Constants) { }

  ngOnInit(): void {
  }

}
