import Currency from './3-currency';

export default class Building {
  constructor(sqft = 0) {
    if (this.constructor !== Building
      && this.evacuationWarningMessage. !== 'function'){
      throw new Error('Class extending Building must override evacuationWarningMessage')
    }
    this.sqft = sqft;
  }

  /**
   * @param {number} name
   */
  set sqft(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
