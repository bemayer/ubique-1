var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/std ...');
test('std', function (done) {

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

assert.deepEqual(ubique.std(c),1.5275252316519465);
assert.deepEqual(ubique.std(c,0),1.247219128924647);
assert.deepEqual(ubique.std(a,0),[[0.4714045207910317],[4.0276819911981905]]);
assert.deepEqual(ubique.std(a,0,1),[[1,1,3]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->