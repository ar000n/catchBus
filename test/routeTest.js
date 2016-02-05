var route=require('../route.js');
var assert=require('chai').assert;

describe('bus',function(){
	it('it should give the all direct buses between two stops',function(){
		var buses = route.directBus('JNR 5TH BLK','LALBHAG MAIN GATE');
		assert.deepEqual([ '1E', '2A', '2B', '2G', '25D', '27E' ],buses);
	});

// it.only('it should give the all buses passing through a stop',function(){
// 		var buses = route.directBus('K R MARKET','K R MARKET');
// 		assert.deepEqual([],buses);
// 	});

	it('should give the all indirect path between two stops',function(){
		var paths = route.indirectBuses('KORAMANGALA','KBS');
		assert.deepEqual([[ "60J", "201D", "201E", "BTM L OUT", "175", "25A", "25B", "25D", "162D"],
			[ "172","60J",    "JAYANAGAR BUS STAND",    "4",    "18",    "22",    "25",    "1D",    "2A",    "2B",
			"2E",    "2G",    "25A",    "25B",    "25C",    "25E",    "215E",    "215R",    "262A",    "364C",  ],
			["201D",    "201E",    "373E",    "BANASHANKARI",    "14A",    "211B",    "215J",    "215O",    "215R"],
			["163",   "163A",   "K R MARKET","31",  "35",  "49",  "52","56","58","15E","15H","15L","31E","36B","36D",
			"36E","36F","43A","43B","43C","43D","43E","45B","45D","45E","52E","54E","57A","58C","59D","88E","210A","210E",
		    "210N","210P","210R","211B","221B","222D","226A","234E","235E","262A","266K","276N","279F","343A" ]],paths);
		var path = route.indirectBuses('HEBGODI','SOUTH END CIRCLE');
		assert.deepEqual([[ "373M","BANASHANKARI","11","210","212","213","214","215","216","217","15F",
		 	"185A","210B","210C","210D","211B","211D","211E","211G","211H","212E","213B","213C","213E","213K", 
		 	"214A","214B","214E","214F","215A","215B","215F","215K","215O","216A","219A"],
		 	["356","350F","350J","351A","351J","352A","354C","355C","356A","356E","360B",
		    "KEMPEGOWDA BUS STAND","12","10D","12D",   "215N",   "276H"],
		    ["350","351","352","353","355","357","358","359","360","361","350A","350B","350G","351C","351H",
		    "352E","353A","354A","356B","356F","360A","360D","361A","K R MARKET","1","48","178","181","219","1A","1C",
		    "1F","10D","215N","219A"]],path);
	});
})