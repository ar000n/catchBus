var root=require('../root.js');
var assert=require('chai').assert;
console.log(root);

describe('bus',function(){
	it('it should give the direct buses between two stops',function(){
		var buses = root.directBus('JNR 5TH BLK','LALBHAG MAIN GATE');
		assert.deepEqual([ '1E', '2A', '2B', '2G', '7E', '25D', '27E' ],buses);
	})
})