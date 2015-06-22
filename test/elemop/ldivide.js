var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/ldivide ...');
test('ldivide', function (done) {



assert.deepEqual(ubique.ldivide(5,6),1.2);
assert.deepEqual(ubique.ldivide([5,6,7],3),[0.6,0.5,0.42857142857142855]);
assert.deepEqual(ubique.ldivide(3,[-1,-2,-3]),[-0.3333333333333333,-0.6666666666666666,-1]);
assert.deepEqual(ubique.ldivide([5,6,3],[0.5,-3,2.3]),[0.1,-0.5,0.7666666666666666]);
assert.deepEqual(ubique.ldivide([[9, 5], [6, 1]],[[3, 2], [5, 2]]),[[0.3333333333333333,0.4],[0.8333333333333334,2]]);
assert.deepEqual(ubique.ldivide([[9, 5], [6, 1]],3),[[0.3333333333333333,0.6],[0.5,3]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->