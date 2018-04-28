//首先让函数自执行
(function(){
	var $swp = $("#wrap").find(".swp");
	$swp.eq(0).animate({
		opacity: 1,
		left: 0
	}, 1000);

	$swp.eq(1).animate({
		opacity:1,
		right:50
	}, 1800);

	$swp.eq(2).animate({
		opacity:1,
		top:70
	}, 1300);

	$swp.eq(3).animate({
		opacity:1,
		top:550
	}, 1300);
})();

//视频弹窗
(function(){
	var $wrap = $("#wrap"),
		$btn = $wrap.find(".videoBtn"),
		$video = $wrap.find(".video"),
		$close = $wrap.find(".close_btn");

		$btn.click(function(){
			$video.show();
			$(document.body).addClass('noScroll');
		});
		$close.click(function(){
			$video.hide();
			$(document.body).removeClass('noScroll');
		});

})();

