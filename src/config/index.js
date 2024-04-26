const colors = require('colors');

colors.setTheme({
  voltar: ['yellow'],
  error: ['red', 'bold'],
  menuBlue: ['blue', 'bold'],
  menuGreen: ['green', 'bold'],
  menuMagenta: ['magenta', 'bold'],
  vidaPerdida: ['red'],
  vida: ['green'],
  prompt: ['gray']
});

const pacote = require('../../lib/hangman-package-poo/index');

const skins = require('./skinForca.json');
const forca = new pacote.Forca();
for (const skin in skins) {
  forca.addSkin(skins[skin]);
}

const ClassVida = require('../vidaIcon');
const vidaIcon = new ClassVida();

const jogador = new pacote.Jogador();

const temas = require('./temas.json');
for (const tema in temas) {
  const { nome, palavras } = temas[tema];
  const novoTema = new pacote.Tema(nome, palavras);

  pacote.Tema.addTema(novoTema);
}

module.exports = {
  forca,
  jogador,
  vidaIcon
};