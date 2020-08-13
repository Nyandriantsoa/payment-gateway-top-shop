import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisaComponent } from './visa/visa.component';
import { MastercardComponent } from './mastercard/mastercard.component';

const routes: Routes = [
  { path : 'visa' , component : VisaComponent },
  { path : 'mastercard' , component : MastercardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
