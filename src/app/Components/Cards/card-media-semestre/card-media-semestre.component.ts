import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EstudanteService } from 'src/app/Services/estudante.service';
import { Estudante } from 'src/Models/Estudante';

@Component({
  selector: 'app-card-media-semestre',
  templateUrl: './card-media-semestre.component.html',
  styleUrls: ['../cards.css']
})
export class CardMediaSemestreComponent implements OnInit {
  private estudante:Estudante;
  
  constructor(private estudanteService:EstudanteService) { }

  ngOnInit():void{
    this.estudanteService.GetEstudante().subscribe(
      estudante => {this.estudante = estudante}
    );
  }
  
  public VerifyEstudanteObj():boolean{
    if(this.estudante) return true;
    return false; 
  }
  
  public GetAv1():number{
    return this.estudante.Av1;
  }

  public GetAv2():number{
    return this.estudante.Av2;
  }

  public GetAv3():number{
    return this.estudante.Av3;
  }

  public GetAvEdag():number{
    return this.estudante.Edag;
  }

  public GetStatusEstudante():number{
    return this.estudante.Status;
  }

  public GetCorStatusEstudante():string{
    return this.estudante.CorStatus;
  }

  public GetMediaSemestre():number{
    return this.estudante.CalcularMediaSemestre();
  }
}
