// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation();

$(function() {
	$('a[href*="panel"]').click(function() {
    location.replace("#productos")
});
});