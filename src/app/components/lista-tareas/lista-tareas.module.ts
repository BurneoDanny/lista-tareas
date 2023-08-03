import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListaTareasComponent } from './lista-tareas.component';



@NgModule({
  declarations: [ListaTareasComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports: [ListaTareasComponent],
})

export class ListaTareasModule { }
