const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const ClassMenuJogar = require('./menuJogar');
const menuJogar = new ClassMenuJogar();

const ClassMenuConfig = require('./menuDeConfiguracao');
const menuConfig = new ClassMenuConfig();

const { jogador } = require('./config/index');

class MenuInicial extends Menu {
  async runMenu(msg) {
    this.options(msg);
    let opt = prompt('>> '.prompt);
    opt = opt === '' ? undefined : parseInt(opt.trim());

    switch (opt) {
      case undefined: break;

      case 0:
        msg = 'Saindo do Sistema...'.gray;
        this.options(msg);
        return;

      case 1:
        msg = "";
        await menuJogar.runMenu();
        break;

      case 2:
        msg = "";
        menuConfig.runMenu();
        break;

      default:
        msg = "Opção Inválida!!!".error;
    }
    this.runMenu(msg);
  }

  options(warning) {
    let txtPontuacao = "";
    if (jogador.getMaiorPontuacao() === jogador.getPontuacao() && jogador.getPontuacao() > 0) {
      txtPontuacao = 'Pontuação Atual: '.menuBlue + `${jogador.getMaiorPontuacao()}`.yellow;
    }
    else if (jogador.getMaiorPontuacao() >= jogador.getPontuacao()) {
      txtPontuacao = 'Maior Pontuação: '.menuBlue + `${jogador.getMaiorPontuacao()}`.yellow;
      if (jogador.getPontuacao() > 0) {
        txtPontuacao += '\nPontuação Atual: '.menuBlue + `${jogador.getPontuacao()}`.green;
      }
    }

    console.clear();
    console.log(
      '\n' +
      'Menu Inicial\n'.menuBlue +
      '-----------------------\n'.menuBlue +
      '1. Jogar\n' +
      '2. Configurações\n' +
      '0. Sair\n' +
      '-----------------------\n'.menuBlue +
      `${txtPontuacao}\n` +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuInicial;