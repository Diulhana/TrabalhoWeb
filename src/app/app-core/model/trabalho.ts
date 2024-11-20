export class Trabalho {
  id: number;
  paciente: string;
  trabalho: string;
  dataEntrada: string;
  dentista: string;
  procedimento: string;
  dataSaida: string;

  constructor(pac: string, trab: string, dataEnt: string, dent: string, proced: string, dataSaida: string, id: number) {
    this.paciente = pac;
    this.trabalho = trab;
    this.dataEntrada = dataEnt;
    this.dentista = dent;
    this.procedimento = proced;
    this.dataSaida = dataSaida;
    this.id = id;
  }
}
