import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas: any[] = [];

  constructor() { }

  //Recibe una cadena que conforma la tarea.
  agregarTarea(tarea:string){
    this.tareas.push(tarea);
  } 

  //retorna las tareas del arreglo de tareas
  obtenerTareas(){
    return this.tareas;
  }

  //recibe un número que representa el índice de una
  //tarea y elimina del arreglo de tareas la tarea en dicho índice.
  eliminarTarea(index:number){
    for(let i = 0; i < this.tareas.length; i++){
      if(index > this.tareas.length){
        throw new Error('Something went wrong');
      }
      this.tareas.splice(index,1);
    }
  }

}
