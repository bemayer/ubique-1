var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/log ...');
test('log', function (done) {



assert.deepEqual(ubique.sqrt(6),2.449489742783178);
assert.deepEqual(ubique.sqrt([5,6,3]),[2.23606797749979,2.449489742783178,1.7320508075688772]);
assert.deepEqual(ubique.sqrt([[5,6,5],[7,8,2]]),[[2.23606797749979,2.449489742783178,2.23606797749979],[2.6457513110645907,2.8284271247461903,1.4142135623730951]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->