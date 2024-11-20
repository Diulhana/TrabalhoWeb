import {Injectable} from '@angular/core';
import {Trabalho} from '../model/trabalho';

@Injectable({
  providedIn: 'root'
})

export class TrabalhoService {
  private listaDeTrabalhos: String[] = [];

  private trabalhos: Trabalho[] = [];

  addTrabalho(trabalho: string){
    this.listaDeTrabalhos.push(trabalho);
    console.log("TRABALHOS ADICIONADOS", this.listaDeTrabalhos);
  }

  populartabela(): Trabalho[]{
    let t: Trabalho = new Trabalho('Angelita', 'Protese Total Sup', '14/11/2024', 'Dr Felipe', 'Montagem', '14/11/2024', 0);
    let t2: Trabalho = new Trabalho('Joseane', 'Protocolo Inf', '05/11/2024', 'Dr Felipe', 'Dente + Barra', '20/11/2024', 0);
    let t3: Trabalho = new Trabalho('Andreia', 'PPR Sup', '05/11/2024', 'Dr João', 'Armação + Cera', '20/11/2024', 0);

    this.trabalhos.push(t, t2, t3);
    return this.trabalhos;
  }
}
