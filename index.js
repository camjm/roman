'use strict';

const numerals = {
  'M': { 'value': 1000, 'prefix': 'C' },
  'D': { 'value': 500, 'prefix': 'C' },
  'C': { 'value': 100, 'prefix': 'X' },
  'L': { 'value': 50, 'prefix': 'X' },
  'X': { 'value': 10, 'prefix': 'I' },
  'V': { 'value': 5, 'prefix': 'I' },
  'I': { 'value': 1 }
};

function isRoman(text) {
  var chars = Array.from(text.toUpperCase());
  return chars.every(numeral => numerals.hasOwnProperty(numeral));
}

function toRoman(arabic) {
  var roman = '';
  for (var key in numerals) {
    var numeral = numerals[key];
    var value = numeral.value;
    for (var i = arabic - value; i >= 0; i -= value) {
      roman += key;
      arabic -= value;
    }
    if (numeral.hasOwnProperty('prefix')) {
      var prefixNumeral = numerals[numeral.prefix];
      var prefixValue = prefixNumeral.value;
      var com = numeral.prefix + key;
      var val = value - prefixValue;
      for (var i = arabic - val; i >= 0; i -= val) {
        roman += com;
        arabic -= val;
      }
    }
  }
  return roman;
}

function toArabic(roman) {
  var arabic = 0;
  Array.from(roman).reduceRight((previous, current) => {
    var value = numerals[current].value;
    arabic = value < previous ? arabic - value : arabic + value;
    return value;
  }, 0);
  return arabic;
}

// Expose
module.exports.isRoman = isRoman;
module.exports.toRoman = toRoman;
module.exports.toArabic = toArabic;
