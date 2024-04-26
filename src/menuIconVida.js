const prompt = require('prompt-sync')({ sigint: false });
const Menu = require('./menu');

const { vidaIcon } = require('./config');

class MenuIconVida extends Menu {
  runMenu(msg) {
    this.options(msg);
    let opt = prompt('>> '.prompt);
    opt = opt === '' ? undefined : parseInt(opt.trim());

    switch (opt) {
      case undefined: break;
      case 0: return;

      case 1:
        msg = "";
        vidaIcon.setIconVida(this.mudarIcon(1));
        break;

      case 2:
        msg = "";
        vidaIcon.setIconVidaPerdida(this.mudarIcon(2));
        break;

      case 3:
        vidaIcon.toggleHabilitado();
        break;

      default:
        msg = 'Opção Inválida!!!'.error;
    }
    this.runMenu(msg);
  }

  options(warning) {
    const vidaHabilitado = vidaIcon.getHabilitado() ? 'Desabilitar' : 'Habilitar';

    console.clear();
    console.log(
      '\n' +
      'Alterar Ícones de Vida\n'.menuMagenta +
      '-----------------------------------\n'.menuMagenta +
      `1. Icone de Vida { ${vidaIcon.getIconVida().vida} }\n` +
      `2. Icone de Vida Perdida { ${vidaIcon.getIconVidaPerdida().vidaPerdida} }\n` +
      `3. ${vidaHabilitado} os Ícones de Vida\n` +
      '-----------------------------------\n'.menuMagenta +
      '0. Voltar\n'.voltar +
      `${warning ? `\n${warning}\n` : ""}`
    );
  }

  mudarIcon(num) {
    let text;
    let cor = 'reset';

    if (num === 1) {
      text = "Vida";
      cor = 'green';
    }
    else if (num === 2) {
      text = "Vida Perdida";
      cor = 'red';
    }

    // console.clear();
    console.log(`\nEscolha um Novo Símbolo para ${text}:`[cor]);
    const result = prompt('>> '.prompt).trim()[0] || " ";
    return result;
  }
}

module.exports = MenuIconVida;