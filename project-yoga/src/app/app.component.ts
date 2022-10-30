import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Constants } from './constants';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'project-yoga';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  reason = '';

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private router: Router,
    public constants: Constants,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 768px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  close(reason: string) {
    this.reason = reason;
    if(this.sidenav) {
      this.sidenav.close();
    }
  }

  public redireccionar(ruta: any): void {
    this.router.navigate([ruta]);
    if(this.sidenav) {
      this.sidenav.close();
    }
  }

  public irWhatsApp(): void {
    window.open("https://web.whatsapp.com/send?phone=5491167822835&text=%C2%A1Hola!", "_blank");
  }
}
