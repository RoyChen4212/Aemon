import padStart from 'lodash/padStart';

const getDigitsFromValue = value => value.replace(/(-(?!\d))|[^0-9|-]/g, '') || '';
const removeLeadingZeros = number => number.replace(/^0+([0-9]+)/, '$1');

const formatCurrency = (digits, separator) => {
  const number = padStart(digits, 4, '0');
  const centsPosition = number.length - 2;
  const dollars = removeLeadingZeros(number.substring(0, centsPosition));
  const cents = number.substring(centsPosition);
  return padStart(dollars, 2, '0') + separator + cents;
};

export default (value = '', separator = '.') => {
  const digits = getDigitsFromValue(value.toString());
  return formatCurrency(digits, separator);
};
