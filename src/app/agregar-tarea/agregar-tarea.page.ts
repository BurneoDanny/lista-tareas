import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
})
export class AgregarTareaPage implements OnInit {
  nuevaTarea : string = "";

  constructor(private tareaService : TareasService) { }

  ngOnInit() {
  }

  agregarTarea(){
    this.tareaService.agregarTarea(this.nuevaTarea);
  }
}
