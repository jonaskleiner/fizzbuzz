$(document).ready(function() {

// fizz buzz starts here

	for ( var i = 1; i <= 100; i++ ) {
		
		if (i % 3 === 0 && i % 5 === 0 ) {
			console.log("hello");
			$("#theValues").append("<p>fizzbuzz</p>");
		} else if (i % 3 === 0) {
			$("#theValues").append("<p>fizz</p>");
		} else if (i % 5 === 0) {
			$("#theValues").append("<p>buzz</p>");
		} else {
			$("#theValues").append("<p>"+i+"</p>");
		}
	}
});