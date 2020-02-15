function btn(id) {
	$('.live-btn a').removeClass('active');
	$('.live-btn a:nth-child('+id+')').addClass('active');
}

function rul() {
	$('.case-do').hide();
	$('.rulet').fadeIn(500);
	
	setTimeout(function(){	
		$('.rul-ul').css({'transform' : 'translate3d(-' + ($('.rul-i').size() - 15) * 155 + 'px, 0, 0)'});
	}, 0.5 * 1000);
	
	setTimeout(function(){	
		$('#modal-2').arcticmodal();
	}, 10 * 1000);
}

$(document).ready(function(){
	$('.live-name, .modal-wp-name, .rul-name').each(function(){
		var str = '|';
		var text = $(this).html();
		text = text.replace(str, '<span>'+str);
		$(this).html(text);
	});
	
	$('.q').hover(
		function() {
			$('.list').addClass('active');
		}, function() {
			$('.list').removeClass('active');
		}
	);
	
	$('.modal-input input[type="text"]').val('1000');
});