import { Component, OnInit } from '@angular/core';
import { EstudanteService } from 'src/app/Services/estudante.service';
import { Estudante } from 'src/Models/Estudante';
import { Media_ProvaFinal } from 'src/Models/Media_Provafinal';

@Component({
  selector: 'app-card-media-tabela',
  templateUrl: './card-media-tabela.component.html',
  styleUrls: ['../cards.css']
})
export class CardMediaTabelaComponent implements OnInit {
  private estudante:Estudante;
  private notasTabela: Media_ProvaFinal[];

  constructor(private estudanteService:EstudanteService) { 
    this.notasTabela = new Array<Media_ProvaFinal>();
  }

  ngOnInit(): void {
    this.estudanteService.GetEstudante().subscribe(
      estudante => { 
        this.estudante = estudante; 
        this.PreencherTabela()
      }
    );
  }

  public VerifyEstudanteObj():boolean{
    if(this.estudante) return true;
    return false; 
  }

  private PreencherTabela(){
    for(let i = 1.7; i <= 6.9; i=i+0.1){
      console.log("=========================")
      console.log("media: " + i.toFixed(1) );
      console.log("media: " + i.toFixed(2) );
      let x = ((50 - 6 * i) / 4);
      console.log("Prova: "+ x.toFixed(1) );
      console.log("Prova: "+ x.toFixed(2) );

      //erro com media 4.3, 4.1, 3.9, 
    }
  }

  public GetMediaSemestre():number{
    return this.estudante.CalcularMediaSemestre();
  }
}
