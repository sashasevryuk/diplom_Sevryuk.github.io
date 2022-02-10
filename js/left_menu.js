$(document).ready(function() {
	$('.btn').click(function(event) {
		$('.block').removeClass('active')
		var num = $(this).attr('data-num');
		$('#block'+num).addClass('active')
	});
});
