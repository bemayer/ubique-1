var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/mpower ...');
test('mpower', function (done) {



assert.deepEqual(ubique.mpower([[1,1,-1],[1,-2,3],[2,3,1]],3),[[-2,11,-11],[11,-35,33],[22,33,-2]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->