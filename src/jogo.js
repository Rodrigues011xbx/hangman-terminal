const prompt = require('prompt-sync')({ sigint: false });

const { jogador, forca, vidaIcon } = require('./config/index');

const { Palavra } = require('../lib/hangman-package-poo/index');
const palavra = new Palavra();

const ClassFimDeJogo = require('./fimDeJogo');
const fimDeJogo = new ClassFimDeJogo();
class Jogo {
  constructor() {
    this._letras = [];
    this._vidaPadrao = 6;
    this._niveisDePontuacao = [40, 35, 30, 15, 10, 5, 0];
    this._frasesBoas = [
      'Uau!', 'Boa!', 'É Isso Ae!',
      'Excelente! Você acertou uma letra!',
      'E não é que funcionou!?', 'Parabéns!',
      'Sabe Muito', 'Brabo demais', 'Correto!',
      'Muito bem! Você está no caminho certo.',
      'Certíssimo!', 'Maravilhoso!', 'Fantástico!!!'
    ].map(frase => frase.green);

    this._frasesRuins = [
      'Não foi dessa vez...', ':(', 'Sabe de nada inocente',
      'Oxe?', 'Kaboom', 'Talvez a próxima vez seja melhor',
      'Ops', 'Tente novamente, essa letra não está correta.',
      'Não, essa não é a letra que você está procurando...',
      'Erro! Essa letra não faz parte da palavra escolhida.',
      'Essa letra não faz parte da palavra secreta.',
      'Essa letra não está na palavra, tente outra.',
      'Infelizmente, você errou a letra desta vez.',
      'Você está quase lá!', 'Continue tentando'
    ].map(frase => frase.red);
  }

  getLetras() {
    return this._letras;
  }

  setLetras(lista) {
    this._letras = lista;
  }

  addLetra(letra) {
    this._letras.push(letra);
  }

  getVidaPadrao() {
    return this._vidaPadrao;
  }

  getNiveisDePontuacao() {
    return this._niveisDePontuacao;
  }

  getRandomFraseBoa() {
    return this._frasesBoas[parseInt(Math.random() * this._frasesBoas.length)];
  }

  getRandomFraseRuim() {
    return this._frasesRuins[parseInt(Math.random() * this._frasesRuins.length)];
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  verificarLetraRepetida(letra) {
    if (this.getLetras().includes(letra))
      return true;
    else
      return false;
  }

  reset() {
    this.setLetras([]);
    forca.setEstado(0);
  }

  async run(temaObj) {
    jogador.setVida(6);
    palavra.novaPalavra(temaObj);

    let text = "";

    while (jogador.getVida() > 0) {
      this.print(text);
      let letra = prompt('>> '.prompt).trim().toUpperCase()[0] ?? "";

      if (letra === "") continue;
      text = "";

      if (letra === "-") {
        text = "Hífens já são Colocados Automaticamente!".yellow;
        continue;
      }

      if (this.verificarLetraRepetida(letra)) {
        text = "A Letra ".error + `{${letra}}`.green + " já foi Utilizada!".error;
        continue;
      }

      if (palavra.verificarLetra(letra)) {
        palavra.addLetra(letra);
        const p = this.getNiveisDePontuacao()[forca.getEstado()];
        jogador.addPontuacao(p);
        text = this.getRandomFraseBoa();
      }
      else {
        const dano = jogador.getVida() - 1;
        jogador.setVida(dano);
        forca.setEstado(this.getVidaPadrao() - jogador.getVida());
        text = this.getRandomFraseRuim();
      }

      this.addLetra(letra);

      if (palavra.verificarPalavra()) {
        this.print();
        await this.delay(800);
        await fimDeJogo.venceu();
        this.reset();
        break;
      }
      if (jogador.getVida() <= 0) {
        this.print();
        await this.delay(800);
        await fimDeJogo.perdeu();
        jogador.setPontuacao(0);
        this.reset();
        break;
      }
    }
  }

  print(texto) {
    let vidaStr;

    if (vidaIcon.getHabilitado()) {
      vidaStr = "";
      const vidaPerdida = this.getVidaPadrao() - jogador.getVida();

      for (let i = 0; i < vidaPerdida; i++) {
        vidaStr += vidaIcon.getIconVidaPerdida().vidaPerdida + " ";
      }

      for (let i = 0; i < jogador.getVida(); i++) {
        vidaStr += vidaIcon.getIconVida().vida + " ";
      }
      vidaStr += "\n";
    }

    console.clear();
    console.log(
      "\n" +
      'Letras: '.menuBlue + `${this.getLetras().join(', ')}\n` +
      'Pontuação: '.menuGreen + `${jogador.getPontuacao().toString().yellow}\n` +
      `\n${forca.getSkinAtual()}\n` +
      `${vidaStr ? vidaStr : ""}\n` +
      'Tema: '.menuBlue + `${palavra.getTema()}\n`.cyan +
      'Texto: '.menuBlue + `${palavra.getPosicao().join(' ')}\n` +
      `${texto ? texto+"\n" : ""}`
    );
  }
}

module.exports = Jogo;