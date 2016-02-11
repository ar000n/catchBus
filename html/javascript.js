
var showBuses = function(){
	var from = $('input[name=from]').val();
	var to = $('input[name=to]').val();
	$.post('findRoute', {from: from, to: to} , function(data){
		// console.log(data);
		(data.length == 0) && $('#routes').html('No bus  is available..');
		if(data[0]== Array){
			$('#routes').html(data);
		}
		else{

		    var thead = d3.select("thead").selectAll("th")
			.data(d3.keys(data[0]))
			.enter().append("th").text(function(d){return d});
			var tr = d3.select("tbody").selectAll("tr")
			.data(data).enter().append("tr")
			var td = tr.selectAll("td")
			.data(function(d){return d3.values(d)})
			.enter().append("td")
			.text(function(d) {return d})
		}
	})
};	


$(document).ready(function(){
	$('#submit_from_to').click(showBuses);
});