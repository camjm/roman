'use strict';

const roman = require('./index');
const numbers = require('./numbers');

numbers.forEach(current => {
  var romanConversion = roman.toArabic(current.roman);
  var romanSuccess = romanConversion === current.arabic;
  console.log(`Roman to Arabic: ${romanSuccess ? 'SUCCESS' : 'FAILURE'} ${current.roman} => ${romanConversion} (expected ${current.arabic})`);
  
  var arabicConversion = roman.toRoman(current.arabic);
  var arabicSuccess = arabicConversion === current.roman;
  console.log(`Arabic to Roman: ${arabicSuccess ? 'SUCCESS' : 'FAILURE'} ${current.arabic} => ${arabicConversion} (expected ${current.roman})`);
  
  console.log('\n')
});
