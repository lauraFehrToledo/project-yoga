import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public readonly constants: Constants) { }


}
