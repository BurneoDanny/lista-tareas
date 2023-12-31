import { Component, OnInit } from '@angular/core';

import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss'],
})

export class ListaTareasComponent  implements OnInit {
  tareas : any[] = [];

  constructor(private tareaService : TareasService) { }

  ngOnInit() {
    this.tareas = this.tareaService.obtenerTareas();
  }

  eliminarTarea(index : number){
    this.tareaService.eliminarTarea(index);

  }



}
