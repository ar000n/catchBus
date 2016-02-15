
var showBuses = function(){
	var from = $('select[name=from]').val();
	var to = $('select[name=to]').val();

	$.post('findRoute', {from: from, to: to} , function(data){

		(data.length == 0) && $('#singleLine').html('No bus  is available..');
		if(typeof(data[0])=='string'){
			$('#singleLine').html('Catch any one of :- '+data.join('  '));
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
	$('#submit_from_to').on('click', function(){
		$('table').html('<thead></thead><tbody></tbody>');
		$('#singleLine').empty();
		showBuses();
	});
});