const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { Tema } = require('../lib/hangman-package-poo/index');

const ClassJogo = require('./jogo');
const jogo = new ClassJogo();

class MenuJogar extends Menu {
  async runMenu(msg) {
    let optTemas = "";
    Tema.getAllTemas().forEach((tema, index) => {
      optTemas += `${index + 2}. ${tema}\n`;
    });

    this.options(optTemas, msg);
    let opt = prompt('>> '.prompt);
    opt = opt === '' ? undefined : parseInt(opt.trim());

    switch(opt) {
      case undefined:
        await this.runMenu(msg);
        break;

      case 0: return;

      case 1:
        const palavra = this.menuOptCustom();
        const obj = {
          tema: 'Custom',
          palavra,
        }
        await jogo.run(obj);
        break;

      default:
        const temaSelected = Tema.selectTema(opt - 2);
        if (temaSelected === undefined) {
          msg = 'Opção Inválida!!!'.error;
          await this.runMenu(msg);
        }
        else {
          await jogo.run(temaSelected);
        }
    }
  }

  options(optTemas, warning) {
    console.clear();
    console.log(
      '\n' +
      'Temas\n'.menuGreen +
      '-----------------\n'.menuGreen +
      '1. Custom\n' +
      optTemas +
      '-----------------\n'.menuGreen +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }

  menuOptCustom() {
    console.clear();
    console.log(
      '\n' +
      'Tema Custom\n'.menuGreen +
      '-----------------\n'.menuGreen +
      'Escreva uma palavra e passe para o próximo Jogador.\n'.menuGreen +
      'Tome cuidado para ele não ver a palavra secreta!\n'.gray
    );
    let opt = prompt('>> '.prompt).trim();
    opt = opt === '' ? undefined : opt;

    return opt;
  }
}

module.exports = MenuJogar;