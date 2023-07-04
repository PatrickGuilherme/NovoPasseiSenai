import { Component, OnInit } from '@angular/core';
import { EstudanteService } from 'src/app/Services/estudante.service';
import { Estudante } from 'src/Models/Estudante';
import { Media_ProvaFinal } from 'src/Models/Media_ProvaFinal';
import Decimal from 'decimal.js';

@Component({
  selector: 'app-card-media-tabela',
  templateUrl: './card-media-tabela.component.html',
  styleUrls: ['../cards.css','../tabela.css']
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
  
  private PreencherTabela(){
    let i = new Decimal(1.7);
    let lim = new Decimal(6.9);
    
    for(i; i <= lim; i= i.plus(0.1))
    {
      let operacaoMult = Decimal.mul(6,i);
      let operacaoSub = Decimal.sub(50, operacaoMult);
      let operacaoDiv = operacaoSub.div(4).toFixed(1);

      this.notasTabela.push(
        new Media_ProvaFinal(i.toString(), operacaoDiv)
      );
    }
  }

  public VerifyEstudanteObj():boolean{
    if(this.estudante) return true;
    return false; 
  }

  public GetMediaSemestre():number{
    return this.estudante.CalcularMediaSemestre();
  }

  public GetNotasTabela():Media_ProvaFinal[]{
    return this.notasTabela;
  }
}
