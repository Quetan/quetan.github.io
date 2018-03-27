$(function() {

	// Custom JS

$("#animations").on('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
	$("#left").addClass(' animated fadeInRight');
	$("#right").addClass(' animated fadeInLeft');
	$("#up").addClass(' animated fadeInUp');

  } else {
    // element has gone out of viewport
	$("#left").removeClass(' animated fadeInRight');
	$("#right").removeClass(' animated fadeInLeft');
	$("#up").removeClass(' animated fadeInUp');


  }
});

$('#works_item_1').mouseover(function(event) {
	$('#works_item_1').addClass('animated pulse');
});
$('#works_item_2').mouseover(function(event) {
	$('#works_item_2').addClass('animated pulse');
});
$('#works_item_3').mouseover(function(event) {
	$('#works_item_3').addClass('animated pulse');
});

$('#works_item_1').mouseout(function(event) {
	$('#works_item_1').removeClass('animated pulse');
});
$('#works_item_2').mouseout(function(event) {
	$('#works_item_2').removeClass('animated pulse');
});
$('#works_item_3').mouseout(function(event) {
	$('#works_item_3').removeClass('animated pulse');
});


$('#help_par_1').mouseover(function(event) {
	$('#help_par_1').addClass('animated pulse');
});
$('#help_par_2').mouseover(function(event) {
	$('#help_par_2').addClass('animated pulse');
});
$('#help_par_3').mouseover(function(event) {
	$('#help_par_3').addClass('animated pulse');
});
$('#help_par_4').mouseover(function(event) {
	$('#help_par_4').addClass('animated pulse');
});

$('#help_par_1').mouseout(function(event) {
	$('#help_par_1').removeClass('animated pulse');
});
$('#help_par_2').mouseout(function(event) {
	$('#help_par_2').removeClass('animated pulse');
});
$('#help_par_3').mouseout(function(event) {
	$('#help_par_3').removeClass('animated pulse');
});
$('#help_par_4').mouseout(function(event) {
	$('#help_par_4').removeClass('animated pulse');
});



});
