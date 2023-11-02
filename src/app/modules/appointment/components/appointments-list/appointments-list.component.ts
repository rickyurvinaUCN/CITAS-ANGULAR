import { Component, ViewChild } from '@angular/core';


import { ModalConfig, ModalComponent } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})

export class AppointmentsListComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Crear paciente',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}

  async openModal() {
    return await this.modalComponent.open();
  }
}
