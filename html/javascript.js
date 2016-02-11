
var showBuses = function(){
	var from = $('input[name=from]').val();
	var to = $('input[name=to]').val();
	$.post('findRoute', {from: from, to: to} , function(data){
		$('#routes').html(data.join("<br>"));

		// console.log("helllo");
		// for(var i=0;i<data.length;i++){
		// 	console.log(data[i]);
		// }
 // var sessions = new Array(
 //        {id: 1, distance: 50},
 //        {id: 2, distance: 50},
 //        {id: 3, distance: 50},
 //        {id: 4, distance: 50},
 //        {id: 6, distance: 70}
 // );
      
 //      var thead = d3.select("thead").selectAll("th")
	// .data(d3.keys(sessions[0]))
	// .enter().append("th").text(function(d){return d});
	// var tr = d3.select("tbody").selectAll("tr")
	// .data(sessions).enter().append("tr")
	// var td = tr.selectAll("td")
	//   .data(function(d){return d3.values(d)})
	//   .enter().append("td")
	//   .text(function(d) {return d})
		})
};	


$(document).ready(function(){
	$('#submit_from_to').click(showBuses);
});