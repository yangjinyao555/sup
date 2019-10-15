
function DY_scroll(wraper, prev, next, img, speed, or) {
	var wraper = $(wraper);
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	var s = speed;
	next.click(function() {
		img.animate({
			'margin-left': -w
		}, function() {
			img.find('li').eq(0).appendTo(img);
			img.css({
				'margin-left': 0
			});
		});
	});
	prev.click(function() {
		img.find('li:last').prependTo(img);
		img.css({
			'margin-left': -w
		});
		img.animate({
			'margin-left': 0
		});
	});
	if(or == true) {
		ad = setInterval(function() {
			next.click();
		}, s * 1000);
		wraper.hover(function() {
			clearInterval(ad);
		}, function() {
			ad = setInterval(function() {
				next.click();
			}, s * 1000);
		});

	}
}

//$('#img_x li').eq(0).css('border', '2px solid coral');
//$('#zhezhao').mousemove(function(e) {
//	$('#img_u').show();
//	$('#magnifier').show();
//	var left = e.offsetX - parseInt($('#magnifier').width()) / 2;
//	var top = e.offsetY - parseInt($('#magnifier').height()) / 2;
//	left = left < 0 ? 0 : left;
//	left = left > (parseInt($('#zhezhao').outerWidth()) - parseInt($('#magnifier').outerWidth())) ? (parseInt($('#zhezhao').outerWidth()) - parseInt($('#magnifier').outerWidth())) : left;
//	top = top < 0 ? 0 : top;
//	top = top > (parseInt($('#zhezhao').outerHeight()) - parseInt($('#magnifier').outerHeight())) ? (parseInt($('#zhezhao').outerHeight()) - parseInt($('#magnifier').outerHeight())) : top;
//
//	$('#magnifier').css('left', left + 'px');
//	$('#magnifier').css('top', top + 'px');
//
//	var leftRate = left / parseInt($('#zhezhao').outerWidth());
//	var bigLeft = leftRate * parseInt($('#img_u img').outerWidth());
//	$('#img_u img').css('margin-left', -bigLeft + 'px');
//
//	var topRate = top / parseInt($('#zhezhao').outerHeight());
//	var bigTop = topRate * parseInt($('#img_u img').outerHeight());
//	$('#img_u img').css('margin-top', -bigTop + 'px');
//})
//$('#zhezhao').mouseleave(function() {
//	$('#img_u').hide();
//	$('#magnifier').hide();
//})

$('.img-list li').click(function() {
	$(this).css('border', '1px solid coral').siblings().css('border', '1px solid transparent');
	$('.enlarge-bg-img img').eq(0).attr('src', 'img/aboutUs' + ($(this).index() + 1) + '.jpg');
})

$('.close').click(function(){
	$('.enlarge').css('display','none')
})

$('.img-box').click(function(){
	$('.enlarge').css('display','block')
})