// $(document).ready(function() {
// 		wraperBbanner()
// 		// 轮播图动画
// 		function wraperBbanner() {
// 			var index=0;
// 				var timer=null;
// 				// 获取li的长度
// 				var lisLen=$("#carouselFigure>li").length;
// 				function boxShow() {
// 				    if (index>=lisLen-1) {
// 				       index=0;
// 				   }else {
// 				       index++;
// 				   }
// 				   $("#carouselFigure>li").eq(index).stop(true).fadeIn(1000).siblings('li').stop(true).fadeOut(1000);
// 				   $("#bannerBtn>li").eq(index).css({
// 				   	"background": '#661166'}).siblings('li').css({
// 				   		"background": '#B2EBA0'	})
// 				}
// 				$('#carouselFigure').mouseover(function() {
// 				    clearInterval(timer);
// 				    $('#bannerLast').css("display","block")
// 				    $('#bannerNext').css("display","block")
// 				});
// 				$('#carouselFigure').mouseout(function() {
// 				    timer= setInterval(boxShow,3000);
// 				    //  $('#bannerLast').css("display","none")
// 				    // $('#bannerNext').css("display","none")	
// 				});
// 				$('#bannerNext').click(boxShow);
// 				$('#bannerLast').click(function(){
// 				    if (index<=0) {
// 				       index=lisLen-1;
// 				   }else {
// 				       index--;
// 				   }
// 				   $("#carouselFigure>li").eq(index).stop(true).fadeIn(1000).siblings('li').stop(true).fadeOut(1000);
// 				   $("#bannerBtn>li").eq(index).css({
// 				   	"background": '#661166'}).siblings('li').css({
// 				   		"background": '#B2EBA0'	})
// 				});
// 				timer= setInterval(boxShow, 3000);	
// 		}
// 			// 轮播图动画 end


			




// });