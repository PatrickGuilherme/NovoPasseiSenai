import { Component, OnInit } from '@angular/core';
import { EstudanteService } from 'src/app/Services/estudante.service';
import { Estudante } from 'src/Models/Estudante';
import { Media_ProvaFinal } from 'src/Models/Media_ProvaFinal';

@Component({
  selector: 'app-card-prova-final',
  templateUrl: './card-prova-final.component.html',
  styleUrls: ['../cards.css']
})
export class CardProvaFinalComponent implements OnInit {
  private estudante:Estudante;
  private notasTabela: Media_ProvaFinal[];

  constructor(private estudanteService:EstudanteService) { 
    this.notasTabela = new Array<Media_ProvaFinal>();
  }

  ngOnInit(): void {
    this.estudanteService.GetEstudante().subscribe(
      estudante => { 
        this.estudante = estudante; 
      }
    );
  }

  public VerifyEstudanteObj():boolean{
    if(this.estudante) return true;
    return false; 
  }


  public GetProvaFinal():number{
    return this.estudante.CalcularNotaParaFinal();
  }

  public GetMediaSemestre():number{
    return this.estudante.CalcularMediaSemestre();
  }
}
