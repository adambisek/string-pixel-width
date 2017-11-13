import deburr from 'lodash.deburr';
import widthsMap from './widthsMap';

const settingsDefaults = { font: 'Arial', size: 100 };

const getWidth = (string, settings) => {
  const sett = { ...settingsDefaults, ...settings };
  const font = sett.font.toLowerCase();
  const size = sett.size;
  const variant = 0 + (sett.bold ? 1 : 0) + (sett.italic ? 2 : 0);
  const available = Object.keys(widthsMap);
  if (available.indexOf(font) === -1) {
    throw new Error(`This font is not supported. Supported fonts are: ${available.join(', ')}`);
  }
  let totalWidth = 0;
  deburr(string).split('').forEach((char) => {
    if (/[\x00-\x1F]/.test(char)) { // non-printable character
      return true;
    }
    // use width of 'x' as fallback for unregistered char
    const widths = widthsMap[font][char] || widthsMap[font].x;
    const width = widths[variant];
    totalWidth += width;
    return true;
  });
  return totalWidth * (size / 100);
};

export default getWidth;
