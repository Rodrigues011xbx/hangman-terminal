class VidaIcon {
  constructor(icone_vida = 'O', icone_vida_perdida = 'X') {
    this._habilitado = true;
    this._iconeVida = icone_vida;
    this._iconeVidaPerdida = icone_vida_perdida;
  }

  toggleHabilitado() {
    this._habilitado = !this.getHabilitado();
  }

  getHabilitado() {
    return this._habilitado;
  }

  getIconVida() {
    return this._iconeVida;
  }

  getIconVidaPerdida() {
    return this._iconeVidaPerdida;
  }

  setIconVida(icon = 'O') {
    if (icon.trim() === '') return;
    this._iconeVida = icon;
  }

  setIconVidaPerdida(icon = 'X') {
    if (icon.trim() === '') return;
    this._iconeVidaPerdida = icon;
  }
}

module.exports = VidaIcon;