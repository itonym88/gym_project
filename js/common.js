// $(document).ready(function() {
		
// var slides = $(".slider .slides").children(".slide");
// var width = $(".slider .slides").width();
// var i = slides.length;
// var offset = i * width;
// i--;

// $(".slider .slides").css("width",offset);
// offset = 0;
// $("body .slider .next").click(function(){
// if (offset < width * i) {
// offset += width;
// $(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
// }
// else{
// 	offset=0;
// 	$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
// }
// });
 
 
// $("body .slider .prev").click(function(){
// if (offset > 0) {
// offset -= width;
// $(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
// }
// else{
// 	offset=width*2;
// 	$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
// }
// });
// });

$(window).load(function(){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});