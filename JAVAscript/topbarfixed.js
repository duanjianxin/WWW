$(document).ready(function() {
	// 头部条固定
			window.onscroll=function () {
				var gdtdbjn=$(document).scrollTop();
				if (gdtdbjn>=550) {
					$(".wraper-mainbav").css({
						"position": 'fixed',
						"top": '0',
						"z-index":"9"
					});
					$('.left-fixed').slideDown(500);
				}else{
					$(".wraper-mainbav").css({
						"position": '',
						"top": '',
						"z-index":""
					});
					$('.left-fixed').slideUp(500);
				}

				// console.log($(document).scrollTop())
			};
});
