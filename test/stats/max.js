var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/max ...');
test('max', function (done) {



assert.deepEqual(ubique.max([5,6,-1]),6);
assert.deepEqual(ubique.max([[-1,3,-1],[4,5,9]]),[[3],[9]]);
assert.deepEqual(ubique.max([[-1,3,-1],[4,5,9]],1),[[4,5,9]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->