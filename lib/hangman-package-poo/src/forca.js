class Forca {
  constructor() {
    this._estado = 0;
    this._indexSkin = 0;
    this._todasAsSkins = [];
  }

  getEstado() {
    return this._estado;
  }

  setEstado(estado) {
    this._estado = estado;
  }

  getTodasAsSkins() {
    return this._todasAsSkins;
  }

  getIndexSkin() {
    return this._indexSkin;
  }

  setIndexSkin(index) {
    this._indexSkin = index;
  }

  getSkinAtual() {
    const skin = this.getTodasAsSkins()[this.getIndexSkin()];
    return skin[this.getEstado()];
  }

  skinAnterior() {
    const skinQnt = this.getTodasAsSkins().length;
    const index = this.getIndexSkin() - 1;
    const result = index > 0 ? index : skinQnt - 1;
    this.setIndexSkin(result);
  }

  skinPosterior() {
    const skinQnt = this.getTodasAsSkins().length;
    const index = this.getIndexSkin() + 1;
    const result = index < skinQnt ? index : 0;
    this.setIndexSkin(result);
  }

  addSkin(skin) {
    this._todasAsSkins.push(skin);
  }

}

module.exports = Forca;