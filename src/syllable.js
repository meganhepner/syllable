
export function Haiku(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
}

/*createHaiku() {
  return `{this.line1} {this.line2} {this.line3}`;
}*/

export function allLetter(input) {
  let letters = /^[A-Za-z']+$/;
  if (input.match(letters)) {
    return true;
  }
  else {
    return false;
  }
}

// export function stringToArray(input) {
//   const wordArray = input.split(" "); //
//   return wordArray;
// }

export function syllables(word) {
  word = word.toLowerCase();
  if(word.length <= 3) { 
    return 1; 
  }
  return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
    .replace(/^y/, '')
    .match(/[aeiouy]{1,2}/g).length;
} 

export function arrayCycling5(arr){
  let count = 0;
  for (let i= 0; i <arr.length; i++){
    if (syllables(arr[i]) > 5) {
      return false;
    } else if (syllables(arr[i]) < 5) {
      count += syllables(arr[i]);
    } else if (count > 5) {
      return false;
    } 
  }
  if(count === 5) {
    return arr;
  } else {
    return false;
  }
}

export function arrayCycling7(arr){
  let count = 0;
  for (let i= 0; i <arr.length; i++){
    if (syllables(arr[i]) > 7) {
      return false;
    } else if (syllables(arr[i]) < 7) {
      count += syllables(arr[i]);
      return true;
    } else if (count > 7){
      return false;
    } 
  }
  if(count === 7) {
    return arr;
  } else {
    return false;
  }
}


// export function haikuTest(line1, line2, line3) {
//   if (line1 !== 5 || line2 !== 7 || line3 !== 5){
//     return false;
//   } else {
//     return true;
//   }
// }