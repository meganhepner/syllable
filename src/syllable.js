export function allLetter(input) {
  let letters = /^[A-Za-z']+$/;
  if (input.match(letters)) {
    return true;
  }
  else {
    return false;
  }
}