import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AuthGuard } from './authentification/auth.guard';
import { PatientListesComponent } from './patient-listes/patient-listes.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: PatientListesComponent }]),
  ],
  declarations: [AppComponent, TopBarComponent, PatientListesComponent],
  bootstrap: [AppComponent],
  providers: [AuthGuard],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
