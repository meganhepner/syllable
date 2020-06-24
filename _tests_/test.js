import { allLetter, syllables } from "./../src/syllable.js";

describe('allLetter', () => {
test('should return false if string includes characters that are not letters or apostrophes', () => {
  const input = ("123");
  expect(allLetter(input)).toEqual(false);
  });
});

describe('syllables', () => {
  test('should split each word into syllables', () => {
    const input = ("mysterious");
    expect(syllables(input)).toEqual(4); 
    });
  });