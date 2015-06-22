var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/zeros ...');
test('zeros', function (done) {



assert.deepEqual(ubique.zeros(0),[]);
assert.deepEqual(ubique.zeros(1),[[0]]);
assert.deepEqual(ubique.zeros(2),[[0,0],[0,0]]);
assert.deepEqual(ubique.zeros([2,1]),[[0],[0]]);
assert.deepEqual(ubique.zeros(2,3),[[0,0,0],[0,0,0]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->