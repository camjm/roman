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
  var chars = Array.from(roman).reverse();
  var previous = 0;
  for (var i = 0; i < chars.length; i++) {
    var numeral = chars[i];
    var value = numerals[numeral];
    if (value < previous) {
      arabic -= value;
    } else {
      arabic += value;
    }
    previous = value;
  }
  return arabic;
}

// Expose
module.exports.toRoman = toRoman;
module.exports.toArabic = toArabic;
