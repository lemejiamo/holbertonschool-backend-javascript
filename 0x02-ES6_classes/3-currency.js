export default class Currency {
  constructor(code = '', name = '') {
    this.name = name;
    this.code = code;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    if (typeof (name) === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * @param {string} code
   */
  set code(code) {
    if (typeof (code) === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
