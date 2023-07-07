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
    let i = new Decimal(6.9);
    let lim = new Decimal(1.7);
    let operacaoMult:Decimal; 
    let operacaoSub:Decimal;
    let operacaoDiv:Decimal;

    for(i; i >= lim; i= i.sub(0.1))
    {
      operacaoMult = Decimal.mul(6,i);
      operacaoSub = Decimal.sub(50, operacaoMult);
      operacaoDiv = operacaoSub.div(4);

      this.notasTabela.push(
        new Media_ProvaFinal(i.toString(), operacaoDiv.toFixed(1))
      );
    }
  }

  public GetIconeDificuldade(){

    let operacaoDiv = this.estudante.CalcularNotaParaFinal();
    let icone:string;

    if(operacaoDiv <= 2.9){
      icone = "nivel1.jpg"
    }else if(operacaoDiv <= (3.8)){
      icone = "nivel2.jpg"
    }else if(operacaoDiv <= (3.9)){
      icone = "nivel3.jpg"
    }else if(operacaoDiv <= (4.9)){
      icone = "nivel4.jpg"
    }else if(operacaoDiv <= (5.9)){
      icone = "nivel5.jpg"
    }else if(operacaoDiv <= (6.8)){
      icone = "nivel6.jpg"
    }else if(operacaoDiv <= (7.9)){
      icone = "nivel7.jpg"
    }else if(operacaoDiv <= (8.9)){
      icone = "nivel8.jpg"
    }else if(operacaoDiv <= (9.8)){
      icone = "nivel9.jpg"
    }else{
      icone = "nivel10.jpg"
    }
    return "../../../../assets/" + icone;
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
