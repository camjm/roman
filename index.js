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

function toRoman(decimal) {
  var roman = '';
  for (var numeral in numerals) {
    var arabic = numerals[numeral];
    for (var i = decimal - arabic; i >= 0; i -= arabic) {
      roman += numeral;
      decimal -= arabic;
    }
  }
  return roman;
}

function toArabic(roman) {
  var decimal = 0;
  var chars = Array.from(roman).reverse();
  var previous = 0;
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var arabic = numerals[char];
    if (arabic < previous) {
      decimal -= arabic;
    } else {
      decimal += arabic;
    }
    previous = arabic;
  }
  return decimal;
}

// Expose
module.exports.toRoman = toRoman;
module.exports.toArabic = toArabic;
