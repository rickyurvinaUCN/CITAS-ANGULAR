import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { ModalAppointmentComponent } from './components/modal-appointment/modal-appointment.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentFormComponent,
    AppointmentsListComponent,
    ModalAppointmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppointmentComponent,
      },
    ]),
  ],

})
export class AppointmentModule { }
