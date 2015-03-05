var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/vertcat ...');
test('vertcat', function (done) {

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var f = [[3, 2], [5, 2]];

assert.deepEqual(ubique.vertcat(a,b),[[5,6,5],[7,8,-1],[-1,3,-1],[4,5,9]]);
assert.deepEqual(ubique.vertcat(a,b,b),[[5,6,5],[7,8,-1],[-1,3,-1],[4,5,9],[-1,3,-1],[4,5,9]]);
assert.deepEqual(ubique.vertcat(c,d),[5,6,3,0.5,-3,2.3]);
assert.deepEqual(ubique.vertcat([1],[2]),[1,2]);
assert.deepEqual(ubique.vertcat(5,7,9,8),[5,7,9,8]);
assert.deepEqual(ubique.vertcat(5,7,c),[5,7,5,6,3]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->