import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DanzaComponent } from './pages/danza/danza.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MasajesComponent } from './pages/masajes/masajes.component';
import { YogaComponent } from './pages/yoga/yoga.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'yoga', component: YogaComponent
  },
  {
    path: 'masajes', component: MasajesComponent
  },
  {
    path: 'danza', component: DanzaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
