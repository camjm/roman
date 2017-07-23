'use strict';

const numerals = [
  {
    'numeral': 'M',
    'value': 1000
  }, {
    'numeral': 'D',
    'value': 500
  }, {
    'numeral': 'C',
    'value': 100
  }, {
    'numeral': 'L',
    'value': 50
  }, {
    'numeral': 'X',
    'value': 10
  }, {
    'numeral': 'V',
    'value': 5
  }, {
    'numeral': 'I',
    'value': 1
  }
];

function toDecimal(roman) {
  var decimal = 0;
  var chars = Array.from(roman).reverse();
  var previous = 0;
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var numeral = numerals.find(element => element.numeral === char);
    if (numeral.value < previous) {
      decimal -= numeral.value;
    } else {
      decimal += numeral.value;
    }
    previous = numeral.value;
  }
  return decimal;
}

function toRoman(decimal) {
  var roman = '';
  numerals.forEach((current, index) => {
    for (var i = decimal - current.value; i >= 0; i -= current.value) {
      roman += current.numeral;
      decimal -= current.value;
    }
  });
  return roman;
}

// Expose
module.exports.toDecimal = toDecimal;
module.exports.toRoman = toRoman;