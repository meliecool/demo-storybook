import getUserLocale from 'get-user-locale';
import { utils as currencyUtils } from 'iso4217';

export interface MoneyAmountOptions {
  locale?: string;
  isFractionated?: boolean;
  minimumFractionDigits?: number;
}

export default abstract class Helper {
  /**
   * Formats the given money "amount" with "currency" according to the
   * locale of the user.
   *
   * Amounts can come as fractionated ("isFractionated" to TRUE), which
   * means they do not include the fraction (ex: USD$4200 is in fact
   * USD$42.00 because the USD currency allows for 2 decimal places)
   *
   * Then we use the standard Intl.NumberFormat to format the unit
   * to the currency using the user's locale.
   *
   * @param {number} amount the money amount
   * @param {string} currency the currency of the amount
   * @param {string} locale the locale of the user, defaults to #getUserLocale
   * @param {boolean} isFractionated whether the amount comes without decimals, and
   * the decimal point must be determined according to the currency. Defaults to false
   * @param {number} minimumFractionDigits how many fraction digits to show (see `Intl.NumberFormat` options)
   */
  public static formatMoneyAmount(
    amount: number,
    currency: string = null,
    { locale = getUserLocale(), isFractionated = false, minimumFractionDigits = 0 }: MoneyAmountOptions = {},
  ) {
    const precision = isFractionated && currency ? currencyUtils.getByCode(currency)?.Fraction || 0 : 0;

    const options = {
      style: currency ? 'currency' : 'decimal',
      currency,
      minimumFractionDigits, // So we don't show .00 if the amount has no decimals
    };

    if (!currency) {
      delete options.currency;
    }

    return Intl.NumberFormat(locale, options).format(amount / (10 ** precision));
  }
}