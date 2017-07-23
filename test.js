'use strict';

const roman = require('./index');

var decTest = 19;
var romTest = 'XIX';

var romResult = roman.toDecimal(romTest);
var decResult = roman.toRoman(decTest);

console.log(`romTest: ${romTest}, romResult: ${romResult}`);
console.log(`decTest: ${decTest}, decResult: ${decResult}`);