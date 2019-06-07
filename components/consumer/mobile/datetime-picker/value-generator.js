import moment from 'moment-timezone';

export const generateNewValue = (dateStr, timeStr, timezone) => {
  const date = sanitizeDateString(dateStr);
  const time = sanitizeTimeString(timeStr);
  const newDateStr = moment(`${date}T${time}:00`)
    .tz(timezone)
    .format();
  return new Date(newDateStr);
};

export const applyDateToValue = (valueDate, dateStr, timezone) => {
  if (!dateStr) return valueDate;
  const date = sanitizeDateString(dateStr);
  const time = moment(valueDate).format('HH:mm');
  const newDateStr = moment(`${date}T${time}:00`)
    .tz(timezone)
    .format();
  return new Date(newDateStr);
};

export const applyTimeToValue = (valueDate, timeStr, timezone) => {
  if (!timeStr) return valueDate;
  const date = moment(valueDate).format('YYYY-MM-DD');
  const time = sanitizeTimeString(timeStr);
  const newDateStr = moment(`${date}T${time}:00`)
    .tz(timezone)
    .format();
  return new Date(newDateStr);
};

const sanitizeDateString = dateStr => {
  if (!dateStr) return moment(new Date()).format('YYYY-MM-DD');
  const split =
    dateStr.indexOf('-') > 0 ? dateStr.split('-') : dateStr.split('/');
  const month = split[1].length < 2 ? `0${split[1]}` : split[1];
  const day = split[2].length < 2 ? `0${split[2]}` : split[2];
  return `${split[0]}-${month}-${day}`;
};

const sanitizeTimeString = timeStr => {
  if (!timeStr) return '00:00';
  const split = timeStr.split(':');
  const hours = split[0].length < 2 ? `0${split[0]}` : split[0];
  const mins = split[1].length < 2 ? `0${split[1]}` : split[1];
  return `${hours}:${mins}`;
};
