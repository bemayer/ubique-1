var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/array ...');
test('array', function (done) {



assert.deepEqual(ubique.array(),[]);
assert.deepEqual(ubique.array(3,-1),[-1,-1,-1]);
assert.deepEqual(ubique.array(3,'y'),["y","y","y"]);
assert.deepEqual(ubique.array(3,true),[true,true,true]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->