var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/minus ...');
test('minus', function (done) {



assert.deepEqual(ubique.minus(5,6),-1);
assert.deepEqual(ubique.minus([5,6,4],[3,-1,0]),[2,7,4]);
assert.deepEqual(ubique.minus([5,6,4],10),[-5,-4,-6]);
assert.deepEqual(ubique.minus([[5,6,5],[7,8,-1]],[[-1,3,-1],[4,5,9]]),[[6,3,6],[3,3,-10]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->