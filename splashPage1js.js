$(document).ready(function(){

	$(".delay-3_5s").css("color", "blue").delay(4000).queue(function(next){
			$(this).addClass("flipper", function(){
				$(this).removeClass("flipped");
			});
			next();
		}
	);

	$(".delay-4_5s").css("color", "black").delay(12000).queue(function(next){
			$("#wrapper").fadeOut().parent().css('background', 'white').queue(function(next2){
				setTimeout(function(){
					window.location.replace("JQMForm1.html");
				}, 500);
				next2();
			});
			next();
		}
	);
});



