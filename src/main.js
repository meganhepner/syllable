import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Haiku } from './../src/syllables.js';
import { arrayCycling5 } from './syllable';

// UI Logic
$(document).ready(function() {
  $("form#haiku").submit(function(event) {
    event.preventDefault();
    const line1 = $("input#line1").val();
    const line2 = $("input#line2").val();
    const line3 = $("input#line3").val();
    allLetter(line1);
    allLetter(line2);
    allLetter(line3);
    arrayCycling5(line1);
    arrayCycling5(line2);
    arrayCycling5(line3);

    let poem = new Haiku(line1, line2, line3);
    
  });
});