const prompt = require('prompt-sync')({ sigint: false });
const colors = require('colors');
const Menu = require('./menu');

const ClassMenuAlterarForca = require('./menuAlterarForca');
const menuAlterForca = new ClassMenuAlterarForca();

const ClassMenuIconVida = require('./menuIconVida');
const menuIconVida = new ClassMenuIconVida();

class MenuConfiguracao extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = prompt('>> '.prompt);
    opt = opt === '' ? undefined : parseInt(opt.trim());

    switch (opt) {
      case undefined: break;
      case 0: return;

      case 1:
        msg = "";
        menuAlterForca.runMenu();
        break;

      case 2:
        msg = "";
        menuIconVida.runMenu();
        break;

      case 3:
        colors.enabled ? colors.disable() : colors.enable();
        break;

      default:
        msg = 'Opção Inválida!!!'.error;
    }
    this.runMenu(msg);
  }

  options(warning) {
    const colorEnabled = colors.enabled ? 'Desabilitar' : 'Habilitar';

    console.clear();
    console.log(
      '\n' +
      'Configurações\n'.menuMagenta +
      '-----------------------------------\n'.menuMagenta +
      '1. Alterar Forca\n' +
      '2. Configurar os Ícones de Vida\n' +
      `3. ${colorEnabled} as Cores no Terminal\n` +
      '-----------------------------------\n'.menuMagenta +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }
}

module.exports = MenuConfiguracao;