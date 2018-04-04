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

