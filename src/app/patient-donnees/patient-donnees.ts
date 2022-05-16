import { Component } from '@angular/core';

import { patients } from '../patients';

@Component({
  selector: 'app-patient-donnees',
  templateUrl: './patient-donnees.component.html',
  styleUrls: ['./patient-donnees.component.css'],
})
export class PatientDonneesComponent {
  patients = patients;
}