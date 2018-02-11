import index from '../src/index';

test('test basic', () => {
  expect(index('test string')).toBe(435);
});

test('test basic with settings', () => {
  expect(index('test string', { size: 10 })).toBe(43.5);
});

test('test basic with bold', () => {
  expect(index('test string', { font: 'open sans', bold: true })).toBe(512);
});

test('test basic with italic', () => {
  expect(index('test string', { font: 'open sans', italic: true })).toBe(430);
});

test('test basic with bold italic', () => {
  expect(index('test string', { font: 'open sans', bold: true, italic: true })).toBe(485);
});

test('test basic with different font', () => {
  expect(index('test string', { font: 'impact' })).toBe(420);
  expect(index('test string', { font: 'impact', size: 10 })).toBe(42);
  expect(index('test string', { font: 'tahoma', size: 10 })).toBe(44.300000000000004);
});

test('test diacritic', () => {
  const lengthWithDiacritics = index('test ěščřžýáíé');
  const lengthWithoutDiacritics = index('test escrzyaie');
  expect(lengthWithDiacritics).toBe(lengthWithoutDiacritics);
});

test('test non-printable chars', () => {
  // LF, NULL byte, ESC
  const string = `${String.fromCharCode(10)}${String.fromCharCode(0)}${String.fromCharCode(27)}`;
  expect(index(string)).toBe(0);
});

test('test non-existing font', () => {
  expect(() => {
    index('foo', { font: 'bar' });
  }).toThrow();
});

test('test printable, but unregistered character', () => {
  expect(index('‐')).toBe(50);
});
