import { allLetter, syllables, stringToArray, arrayCycling } from "./../src/syllable.js";

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

// describe('haikuTest', () => {
//   test('should verify each line has 5, 7 and 5 sillabyles respectively', () => {
//     const line1 = ("hippopotamus");
//     const line2 = ("a frog jumps into the pond");
//     const line3 = ("one papertowel");
//   expect(haikuTest(line1, line2, line3)).toEqual(true);
//     });
//   });

describe('arrayCycling', () => {
  test('should verify that each line has the appropriate number of syllables', () => {
    let array = ["hippopotakenisuaeke"];
  expect(arrayCycling(array)).toEqual(false);
  });
});

