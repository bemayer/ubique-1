var assert = require('assert');
var ubique = require('../../index.js');

suite('elmath',function () {
console.log('Testing elmath/erfc ...');
test('erfc', function (done) {



assert.deepEqual(ubique.erfc(0.5),0.47950009227675744);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->