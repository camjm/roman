'use strict';

const numerals = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
};

function isRoman(text) {
  var chars = Array.from(text.toUpperCase());
  return chars.every(numeral => numerals.hasOwnProperty(numeral));
}

function toRoman(arabic) {
  var roman = '';
  for (var numeral in numerals) {
    var value = numerals[numeral];
    for (var i = arabic - value; i >= 0; i -= value) {
      roman += numeral;
      arabic -= value;
    }
  }
  return roman;
}

function toArabic(roman) {
  var arabic = 0;
  Array.from(roman).reduceRight((previous, current) => {
    var value = numerals[current];
    arabic = value < previous ? arabic - value : arabic + value;
    return value;
  }, 0);
  return arabic;
}

// Expose
module.exports.isRoman = isRoman;
module.exports.toRoman = toRoman;
module.exports.toArabic = toArabic;
