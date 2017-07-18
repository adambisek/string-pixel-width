import deburr from 'lodash.deburr';
import widthsMap from './widthsMap';

const settingsDefaults = { font: 'Arial', size: 100 };

const getWidth = (string, settings) => {
  const sett = { ...settingsDefaults, ...settings };
  const font = sett.font.toLowerCase();
  const size = sett.size;
  const available = Object.keys(widthsMap);
  if (available.indexOf(font) === -1) {
    throw new Error('This font is not supported. Supported fonts are: '+available.join(', '));
  }
  let totalWidth = 0;
  deburr(string).split('').forEach((char) => {
    if (/[\x00-\x1F]/.test(char)) { // non-printable character
      return true;
    }
    const width = widthsMap[font][char];
    totalWidth += width;
    return true;
  });
  return totalWidth * (size / 100);
};

export default getWidth;
