import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import './syllable.js';
import { Haiku, allLetter, arrayCycling5, arrayCycling7 } from './syllable.js';

// UI Logic
$(document).ready(function() {
  $("form#haiku").submit(function(event) {
    event.preventDefault();
    let line1 = $("input#line1").val();
    let line2 = $("input#line2").val();
    let line3 = $("input#line3").val();
    let arrayWordsLine1 = line1.split(" ");
    let arrayWordsLine2 = line2.split(" ");
    let arrayWordsLine3 = line3.split(" ");
    let poem = new Haiku(line1, line2, line3); 
    for(let i = 0; i< arrayWordsLine1.length; i++) {
      if(!allLetter(arrayWordsLine1[i])) {
        $("div#input").text("Input should only contains letters");
        return;
      }
    }
    for(let i = 0; i< arrayWordsLine2.length; i++) {
      if(!allLetter(arrayWordsLine2[i])) {
        $("div#input").text("Input should only contains letters");
        return;
      }
    }
    for(let i = 0; i< arrayWordsLine3.length; i++) {
      if(!allLetter(arrayWordsLine3[i])) {
        $("div#input").text("Input should only contains letters");
        return;
      }
    }
    if (arrayCycling5(arrayWordsLine1) && arrayCycling7(arrayWordsLine2) && arrayCycling5(arrayWordsLine3)) {
      $("div#answer").append(poem.line1);
      $("div#answer").append(poem.line2);
      $("div#answer").append(poem.line3);
    } else {
      $("div#answer").text("This is not a Haiku poem");
    }
  });
});