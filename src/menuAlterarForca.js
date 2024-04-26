const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { forca } = require('./config/index');

class MenuAlterarForcar extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = prompt('>> '.prompt);
    opt = opt === '' ? undefined : parseInt(opt.trim());

    switch (opt) {
      case undefined: break;
      case 0: return;

      case 1:
        msg = '';
        forca.skinAnterior();
        break;

      case 2:
        msg = '';
        forca.skinPosterior();
        break;

      default:
        msg = 'Opção Inválida!!!'.error;;
    }
    this.runMenu(msg);
  }

  options(warning) {
    forca.setEstado(6);

    console.clear();
    console.log(
      '\n' +
      'Alterar Skin da Forca\n'.menuMagenta +
      '-------------------------------\n'.menuMagenta +
      `${forca.getSkinAtual()}\n\n` +
      '1. Anterior\n' +
      '2. Próximo\n' +
      '-------------------------------\n'.menuMagenta +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuAlterarForcar;