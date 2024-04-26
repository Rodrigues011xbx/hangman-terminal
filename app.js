require('./src/config/index');

console.log(''.bgBlack);

const MenuInicial = require('./src/menuInicial');
const menu = new MenuInicial();
menu.runMenu();