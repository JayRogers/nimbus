const matchBrackets = require('./nimbus');

test('simple test', () => {
  expect(matchBrackets('{}')).toBe(true);
});

test('empty string test', () => {
  expect(matchBrackets('')).toBe(true);
});

test('missing close }', () => {
  expect(matchBrackets('{{}')).toBe(false);
});

test('missing open', () => {
  expect(matchBrackets('}')).toBe(false);
});

test('long expression', () => {
  expect(matchBrackets('{a+b}{{{a}*2}^2}{16}')).toBe(true);
});

test('non string', () => {
  expect(matchBrackets(2)).toBe(false);
});