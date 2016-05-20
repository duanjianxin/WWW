$(document).ready(function() {
		$(".nav li").hover(function() {
			// console.log($(this).children().children().find("strong"));
			$(this).children().children().find("strong").stop(true).animate({"width":"80px"}, 500);
		}, function() {
			$(this).children().children().find("strong").stop(true).animate({"width":"0px"}, 500);
		});





		$(".right-fixed").animate({"right": "0"}, 1000);
		wraperBbanner();
		// 轮播图动画
		function wraperBbanner() {
			var index=0;
				var timer=null;
				// 获取li的长度
				var lisLen=$("#carouselFigure>li").length;
				function boxShow() {
				    if (index>=lisLen-1) {
				       index=0;
				   }else {
				       index++;
				   }
				   $("#carouselFigure>li").eq(index).stop(true).fadeIn(1000).siblings('li').stop(true).fadeOut(1000);
				   $("#bannerBtn>li").eq(index).css({
				   	"background": '#661166'}).siblings('li').css({
				   		"background": '#B2EBA0'	});
				}
				$('#carouselFigure').mouseover(function() {
				    clearInterval(timer);
				    $('#bannerLast').css("display","block");
				    $('#bannerNext').css("display","block");
				});
				$('#carouselFigure').mouseout(function() {
				    timer= setInterval(boxShow,3000);
				     $('#bannerLast').css("display","none");
				    $('#bannerNext').css("display","none");
				});
				$('#bannerNext').click(boxShow);
				$('#bannerLast').click(function(){
				    if (index<=0) {
				       index=lisLen-1;
				   }else {
				       index--;
				   }
				   $("#carouselFigure>li").eq(index).stop(true).fadeIn(1000).siblings('li').stop(true).fadeOut(1000);
				   $("#bannerBtn>li").eq(index).css({
				   	"background": '#661166'}).siblings('li').css({
				   		"background": '#B2EBA0'	});
				});
				timer= setInterval(boxShow, 3000);
		}
			// 轮播图动画 end

			// 倒计时
			function Countdown() {
				var timer2=null;
				// //  获取当前时间		//？天？小时？分钟？秒
			    var date = new Date();
			    //  设置2016/5/6/20:00:00时间
			    date.setFullYear(2016,04,11);
			    date.setHours(1, 23, 56);
			    var date2 = new Date();
			    var c = date - date2;
			    var s = parseInt(c / 1000);
			    var s1 = s % 60;
			    var m = parseInt(s / 60);
			    var m1 = m % 60;
			    var h = parseInt(m / 60);
			    var h1 = h % 24;
			    var d = parseInt(h / 24);
			    // alert(d + '天' + h1 + ':' + m1 + ':' + s1);
			    $('.t-d').html(d);
			    $('.t-h').html(h1);
			    $('.t-m').html(m1);
			    $('.t-s').html(s1);

			}
				timer2= setInterval(Countdown, 1000);

					// 倒计时 end

			// 导航tab切换
			$(".nav>li").mouseover(function () {
				$(this).find($(".nav-warpShow")).css("display","block");
			});
			$(".nav>li").mouseout(function () {
				$(".nav-warpShow").css("display","none");
			});




			// 返回顶部
			$(".side-up").click(function () {
				$("html,body").animate({scrollTop:0},500);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
           		 return false;
			});


			$(".left-fixed-a1").click(function () {
				 $("html,body").animate({scrollTop:500},500);

           		 return false;
			});
			$(".left-fixed-a2").click(function () {
				$("html,body").animate({scrollTop:1300},500);
           		 return false;
			});
			$(".left-fixed-a3").click(function () {
				$("html,body").animate({scrollTop:2200},500);
           		 return false;
			});
			$(".left-fixed-a4").click(function () {
				$("html,body").animate({scrollTop:3000},500);
           		 return false;
			});





			// 搜索框获取焦点变长

			$(".search").focus(function () {
				$(".searchBar").animate({"width":"200px"},100);
			});
			// 搜索框失去焦点变短
			$(".search").blur(function () {
				$(".searchBar").animate({"width":"172px"},100);
			});

			// 获取用户名cookie
			var cokname=$.cookie("myname");
			if (cokname) {
				$(".login").html(cokname).css("color","red");
			}

});
