class Jogador {
  constructor() {
    this._maiorPontuacao = 0;
    this._pontuacao = 0;
    this._vida = 0;
  }

  getMaiorPontuacao() {
    return this._maiorPontuacao;
  }

  setMaiorPontuacao(pontuacao) {
    this._maiorPontuacao = pontuacao;
  }

  getPontuacao() {
    return this._pontuacao;
  }

  addPontuacao(num) {
    this._pontuacao += num;
    this.verificarPontuacao();
  }

  setPontuacao(pontuacao) {
    this._pontuacao = pontuacao;
    this.verificarPontuacao();
  }

  verificarPontuacao() {
    if (this.getPontuacao() > this.getMaiorPontuacao()) {
      this.setMaiorPontuacao(this.getPontuacao());
    }
  }

  getVida() {
    return this._vida;
  }

  setVida(vida) {
    this._vida = vida;
  }

}

module.exports = Jogador;