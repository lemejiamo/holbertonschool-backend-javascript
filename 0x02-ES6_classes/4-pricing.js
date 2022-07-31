import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency = '') {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * @param {number} name
   */
  set amount(amount) {
    if (typeof (amount) === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  /**
   * @param {Currency} code
   */
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a instance of Currency class');
    }
  }

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
