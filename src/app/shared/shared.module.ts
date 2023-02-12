import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { DriverPipe } from './pipes/driver.pipe';



@NgModule({
  declarations: [
    ModalComponent,
    DriverPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    DriverPipe
  ]
})
export class SharedModule { }
