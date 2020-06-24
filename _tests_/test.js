import { allLetter, syllables, stringToArray } from "./../src/syllable.js";

describe('allLetter', () => {
test('should return false if string includes characters that are not letters or apostrophes', () => {
  const input = ("123");
  expect(allLetter(input)).toEqual(false);
  });
});

describe('stringToArray', () => {
  test('should split string into an array', () => {
    const input = ("a b c");
    expect(stringToArray(input)).toEqual(["a", "b", "c"]); 
    });
  });

describe('syllables', () => {
  test('should split each word into syllables', () => {
    const input = ("mysterious");
    expect(syllables(input)).toEqual(4); 
    });
  });

