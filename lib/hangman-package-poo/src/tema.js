class Tema {
  static _allTemas = [];

  static addTema(tema) {
    Tema._allTemas.push(tema);
    Tema._allTemas.sort((a, b) => a - b);
  }

  static getAllTemas() {
    const lista = [];

    Tema._allTemas.forEach(tema => {
      lista.push(tema.getTema());
    });

    return lista;
  }

  static selectTema(selecao) {
    const lista = Tema._allTemas;
    let result;

    if (typeof selecao === 'number')
      result = lista[selecao];
    else
      result = lista.find(tema => tema.getTema() === selecao);

    return result;
  }

  constructor(tema = '', palavra = null) {
    this._tema = tema;
    if (Array.isArray(palavra) || palavra instanceof Set)
      this._palavras = new Set(palavra);
    else
      this._palavras = new Set([palavra]);
  }

  getTema() {
    return this._tema;
  }

  setTema(tema) {
    this._tema = tema;
  }

  getPalavras() {
    return this._palavras;
  }

  adicionarPalavra(palavra) {
    const uppercase = palavra.toUpperCase();
    this._palavras.add(uppercase);
  }

  removerPalavra(palavra) {
    this._palavras.delete(palavra);
  }

  palavraAleatoria() {
    const palavras = this.getPalavras();
    const index = Math.floor(Math.random() * palavras.size);
    return [...palavras][index];
  }

}

module.exports = Tema;