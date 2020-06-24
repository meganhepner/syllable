export function allLetter(input) {
  let letters = /^[A-Za-z']+$/;
  if (input.match(letters)) {
    return true;
  }
  else {
    return false;
  }
}
export function syllables(word) {
  word = word.toLowerCase();
  if(word.length <= 3) { return 1; }
    return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
      .replace(/^y/, '')
      .match(/[aeiouy]{1,2}/g).length;
}