$(document).ready(function(){

$('#1').click(function(){
$("p").hide();
});


$('#2').click(function(){
$("p").show();
});

$('#3').click(function(){
$("p").toggle();
});

$('#5').click(function(){
$('#4').fadeOut("slow");
});

$('#7').click(function(){
$('#4').fadeIn("slow");
})
});