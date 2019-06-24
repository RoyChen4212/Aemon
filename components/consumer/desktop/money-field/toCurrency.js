const getDigitsFromValue = value => value.replace(/(-(?!\d))|[^0-9|-]/g, '') || '';
const removeLeadingZeros = number => number.replace(/^0+([0-9]+)/, '$1');

const formatCurrency = (digits, separator) => {
  const number = digits.padStart(4, '0');
  const centsPosition = number.length - 2;
  const dollars = removeLeadingZeros(number.substring(0, centsPosition));
  const cents = number.substring(centsPosition);
  return dollars.padStart(2, '0') + separator + cents;
};

export default (value = '', separator = '.') => {
  const digits = getDigitsFromValue(value.toString());
  return formatCurrency(digits, separator);
};
