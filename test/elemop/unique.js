var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/unique ...');
test('unique', function (done) {



assert.deepEqual(ubique.unique([5,5,6,6,7]),[5,6,7]);
assert.deepEqual(ubique.unique([[5,4],[5,3],[6,3]]),[[5,3],[6,4]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->