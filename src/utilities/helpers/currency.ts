/**
 * Formats a number as a US dollar currency string.
 *
 * @param {number} [value=0] - The number to format.
 * @returns {string} - The formatted currency string.
 */
export const parseCurrency = (value: number = 0): string => {
  /**
   * The locale string for the United States.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation
   */
  const locale = "en-US";

  /**
   * The options for formatting the number as a currency string.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#Parameters
   */
  const options = { style: "currency", currency: "USD" };

  return value.toLocaleString(locale, options);
};
