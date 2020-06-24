import { allLetter } from "./../src/syllable.js";

describe('allLetter', () => {
test('should return false if string includes characters that are not letters or apostrophes', () => {
  const input = ("won't");
  expect(allLetter(input)).toEqual(true);
  });
});