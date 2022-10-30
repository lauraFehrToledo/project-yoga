import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  constructor(public readonly constants: Constants,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public irFacebook(): void {
    window.open("https://www.facebook.com", "_blank");
  }

  public irInstagram(): void {
    window.open("https://www.instagram.com", "_blank");
  }

  public irWhatsApp(): void {
    window.open("https://web.whatsapp.com/send?phone=5491167822835&text=%C2%A1Hola!", "_blank");
  }

  public sendEmail(e: Event) {
    e.preventDefault();
  
    emailjs.sendForm('service_wh0g8hm', 'template_d4nv205', e.target as HTMLFormElement, 'hBgTNjhWRTZG6k1MF')
      .then((result: EmailJSResponseStatus) => {
        // console.log(result.text);
        const dialogRef = this.dialog.open(ModalComponent);
        dialogRef.afterClosed().subscribe( result => {
          if (result) {
            // Resetear formulario
          }
        });
      }, (error) => {
        console.log(error.text);
      });
  }

}
