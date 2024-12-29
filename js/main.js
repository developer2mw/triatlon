$(document).ready(function() {
	$("#msj_error").hide();
});

function scaleCaptcha() {
	var fieldWidth = $('.text-field').first().outerWidth();
	var captchaScale = fieldWidth / 300.54;
	$('.g-recaptcha').css({
		'transform':'scale('+captchaScale+')'
	});
	console.log('fieldWidth: ' + fieldWidth);
}
var screenHeight;
var triatlon;
var List;
var ListHeight;

function triatlonSetup() {
	screenHeight = $(window).height();
	ListHeight = List.outerHeight();
	if( (ListHeight + 67) >= screenHeight ) {
		List.css({ height: (screenHeight - 67) + 'px', overflow: 'auto' });
	} else {
		List.css({ height: 'auto' });
	}
	triatlon.css({top: -ListHeight + 'px' });
}

$(window).load(function() {
	screenHeight = $(window).height();
	triatlon = $('#triatlon');
	List = $('#listaC');
	ListHeight = List.outerHeight();
	$(window).resize( $.throttle( 500, triatlonSetup ) );
	$('#more-listaC-btn').on('click', function() {
		$('.triatlon').toggleClass('open');
	});
	triatlonSetup();
	window.setTimeout(function() {
		triatlonSetup();
	}, 1500);
	//$('.header .title').bigtext();
});



/*
$(function() {
	var headertext = [],
	headers = document.querySelectorAll(".table1 th"),
	tablerows = document.querySelectorAll(".table1 th"),
	tablebody = document.querySelector(".table1 tbody");
	for(var i = 0; i < headers.length; i++) {
		var current = headers[i];
		headertext.push(current.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row; row = tablebody.rows[i]; i++) {
		for (var j = 0, col; col = row.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext[j]);
		}
	}

	var headertext2 = [],
	headers2 = document.querySelectorAll(".table2 th"),
	tablerows2 = document.querySelectorAll(".table2 th"),
	tablebody2 = document.querySelector(".table2 tbody");
	for(var i = 0; i < headers2.length; i++) {
		var current2 = headers2[i];
		headertext2.push(current2.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row2; row2 = tablebody2.rows[i]; i++) {
		for (var j = 0, col; col = row2.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext2[j]);
		}
	}

	var headertext3 = [],
	headers3 = document.querySelectorAll(".table3 th"),
	tablerows3 = document.querySelectorAll(".table3 th"),
	tablebody3 = document.querySelector(".table3 tbody");
	for(var i = 0; i < headers3.length; i++) {
		var current3 = headers3[i];
		headertext3.push(current3.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row3; row3 = tablebody3.rows[i]; i++) {
		for (var j = 0, col; col = row3.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext3[j]);
		}
	}

	var headertext4 = [],
	headers4 = document.querySelectorAll(".table4 th"),
	tablerows4 = document.querySelectorAll(".table4 th"),
	tablebody4 = document.querySelector(".table4 tbody");
	for(var i = 0; i < headers4.length; i++) {
		var current4 = headers4[i];
		headertext4.push(current4.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row4; row4 = tablebody4.rows[i]; i++) {
		for (var j = 0, col; col = row4.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext4[j]);
		}
	}

	var headertext5 = [],
	headers5 = document.querySelectorAll(".table5 th"),
	tablerows5 = document.querySelectorAll(".table5 th"),
	tablebody5 = document.querySelector(".table5 tbody");
	for(var i = 0; i < headers5.length; i++) {
		var current5 = headers5[i];
		headertext5.push(current5.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row5; row5 = tablebody5.rows[i]; i++) {
		for (var j = 0, col; col = row5.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext5[j]);
		}
	}

	var headertext6 = [],
	headers6 = document.querySelectorAll(".table6 th"),
	tablerows6 = document.querySelectorAll(".table6 th"),
	tablebody6 = document.querySelector(".table6 tbody");
	for(var i = 0; i < headers6.length; i++) {
		var current6 = headers6[i];
		headertext6.push(current6.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row6; row6 = tablebody6.rows[i]; i++) {
		for (var j = 0, col; col = row6.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext6[j]);
		}
	}


	var headertext7 = [],
	headers7 = document.querySelectorAll(".table7 th"),
	tablerows7 = document.querySelectorAll(".table7 th"),
	tablebody7 = document.querySelector(".table7 tbody");
	for(var i = 0; i < headers7.length; i++) {
		var current7 = headers7[i];
		headertext7.push(current7.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row7; row7 = tablebody7.rows[i]; i++) {
		for (var j = 0, col; col = row7.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext7[j]);
		}
	}

	var headertext8 = [],
	headers8 = document.querySelectorAll(".table8 th"),
	tablerows8 = document.querySelectorAll(".table8 th"),
	tablebody8 = document.querySelector(".table8 tbody");
	for(var i = 0; i < headers8.length; i++) {
		var current8 = headers8[i];
		headertext8.push(current8.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row8; row8 = tablebody8.rows[i]; i++) {
		for (var j = 0, col; col = row8.cells[j]; j++) {
	    	col.setAttribute("data-th", headertext8[j]);
		}
	}

});
*/