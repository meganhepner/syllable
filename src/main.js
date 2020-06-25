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
    const arrayWordsLine1 = line1.split(" ");
    const arrayWordsLine2 = line2.split(" ");
    const arrayWordsLine3 = line3.split(" ");
    arrayWordsLine1.forEach(function(element){
      console.log(allLetter(element));
    });
    arrayWordsLine2.forEach(function(element){
      console.log(allLetter(element));
    });
    arrayWordsLine3.forEach(function(element){
      console.log(allLetter(element));
    });
    arrayCycling5(arrayWordsLine1);
    arrayCycling7(arrayWordsLine2);
    arrayCycling5(arrayWordsLine3);

    let poem = new Haiku(line1, line2, line3);
    console.log(poem.line1, poem.line2, poem.line3);   
  });
});