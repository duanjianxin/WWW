$(document).ready(function() {
		// 用AJAX获取放大镜左边四个小图片
			$.ajax({
				url: '../JAVAscript/img.json',
				type: 'GET',
				dataType: 'json',
				success:function(res){
					 // console.log(res.imgs[0].src);
						$(".informationBox-ul-img1").attr("src",res.imgs[0].src);
						$(".informationBox-ul-img2").attr("src",res.imgs[1].src);
						$(".informationBox-ul-img3").attr("src",res.imgs[2].src);
						$(".informationBox-ul-img4").attr("src",res.imgs[3].src);
						
				}

			});

			// 鼠标滑上四个小图片中一个, 大图路径改变
			$('.informationBox-ulBox li').mouseover(function(event) {
				 // console.log($(this).find('img')[0].src)
				 $("#leftbox").find('img').attr("src",$(this).find('img')[0].src);
				 $("#rightbox").find('img').attr("src",$(this).find('img')[0].src);

			});



			// 头部条固定
					window.onscroll=function () {
						var commentbar=$(document).scrollTop();
						if (commentbar>=550) {
							$(".detailsbox-right-top").css({
								"position": 'fixed',
								"top": '0',
								"z-index":"9"
							});
							$('.left-fixed').slideDown(500);
						}else{
							$(".detailsbox-right-top").css({
								"position": '',
								"top": '',
								"z-index":""
							});
							$('.left-fixed').slideUp(500);
						}

						// console.log($(document).scrollTop())
					};







});
