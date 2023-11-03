import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/_metronic/partials';
import { ModalAppointmentConfig } from '../../models/modal-appointment.config';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})

export class AppointmentsListComponent implements OnInit {

  appointments!: Observable<Appointment[]>;
  modalConfig: ModalAppointmentConfig = {
    modalTitle: 'Crear paciente',
    dismissButtonLabel: 'Guardar',
    closeButtonLabel: 'Cancelar'
  };
  ngOnInit(): void {
    this.getAllAppointments();
  }
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor(
    private appointmentService: AppointmentService,
  ) {
  }



  getAllAppointments() {

    this.appointments=this.appointmentService.getAll();
    // this.appointmentService.getAll().subscribe((data) => {
    //   this.appointments = data;
    //   console.log(this.appointments);
    // }, error => {
    //   console.log(error);
    // });
  }

  async openModal() {
    return await this.modalComponent.open();
  }
}
