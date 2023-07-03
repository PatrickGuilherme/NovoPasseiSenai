import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Estudante } from 'src/Models/Estudante';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {
  private EstudanteSubject:Subject<Estudante> = new Subject<Estudante>();

  constructor() { }

  //Envia um valor a todos os observadores
  public SetEstudante(estudante:Estudante){
    this.EstudanteSubject.next(estudante);
  }

  public GetEstudante(){
    return this.EstudanteSubject.asObservable();
  }
}