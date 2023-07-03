export class Estudante {
  Av1: number;
  Av2: number;
  Av3: number;
  Edag: number;
  Status:number;
  CorStatus:string;

  //Construtor que atualiza o objeto
  public constructor(av1:number, av2:number, av3:number, edag:number){
    this.Av1 = av1;
    this.Av2 = av2;
    this.Av3 = av3;
    this.Edag = edag;
    this.DefinirStatusEstudante();
  }

  //Calcular a media do semestre
  public CalcularMediaSemestre():number{
    if(this.Av1 < 0 || this.Av2 < 0 || this.Av3 < 0 || this.Edag < 0) return -1;
    let mediaSemestre = ((this.Av1 * 25) + (this.Av2 * 25) + (this.Av3 * 30) + (this.Edag * 20)) / 100

    return mediaSemestre;
  }

  //Calcular a quantidade de pontos necessária para a prova final
  public CalcularNotaParaFinal():number{
    let mediaSemestre = this.CalcularMediaSemestre();
    if(mediaSemestre == -1 || mediaSemestre >= 7) return -1;

    let notaParaFinal:number = ( 50 - 6 * mediaSemestre) / 4;
    if(notaParaFinal > 10 ) return -1;

    return notaParaFinal;
  }

  //Define o Status do estudante e a cor do status
  private DefinirStatusEstudante():void{
    let mediaSemestre = this.CalcularMediaSemestre();
    console.log(mediaSemestre)
    //Aprovado (verde)
    if(mediaSemestre >= 7){
      this.Status = 1;
      this.CorStatus = "#28a745";
    }else{
      let avaliacaoFinal = this.CalcularNotaParaFinal();

      //Final (Amarelo)
      if(avaliacaoFinal > 0  && avaliacaoFinal <= 10 ){
        this.Status = 2;
        this.CorStatus = "#ffc107";
      }

      //Reprovado (Vermelho)
      else{
        this.Status = 0;
        this.CorStatus = "#dc3545";
      }
    }
  }
}
