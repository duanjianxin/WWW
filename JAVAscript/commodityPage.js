$(document).ready(function() {
	// 放大镜
		document.getElementById('leftbox').onmousemove=function(e){
			// var e=event||window.event;
			document.getElementById('ball').style.display='block';
			document.getElementById('rightbox').style.display='block';
				var clientX=e.clientX - document.getElementById('leftbox').offsetLeft  - document.getElementById('ball').offsetWidth/2;
				var clientY=e.clientY - document.getElementById('leftbox').offsetTop  - document.getElementById('ball').offsetHeight/2;
				if (clientX<=0) {
					clientX=0;
				}else if (clientX>=document.getElementById('leftbox').offsetWidth- document.getElementById('ball').offsetWidth) {
					clientX=document.getElementById('leftbox').offsetWidth- document.getElementById('ball').offsetWidth;
				}
				if (clientY<=0) {
					clientY=0;
				}else if (clientY>=document.getElementById('leftbox').offsetHeight- document.getElementById('ball').offsetHeight) {
					clientY=document.getElementById('leftbox').offsetHeight- document.getElementById('ball').offsetHeight;
				}

				document.getElementById('ball').style.left= clientX +'px';
				document.getElementById('ball').style.top=clientY +'px';


				document.getElementById('rightimg').style.left=-1*clientX*2+'px';
				document.getElementById('rightimg').style.top=-1*clientY*2+'px';


			document.getElementById('leftbox').onmouseout=function(){
			document.getElementById('ball').style.display='none';
			document.getElementById('rightbox').style.display='none';
		};
		};




// 放大镜 end



		// 返回顶部
			$(".side-up").click(function () {
				$("html,body").animate({scrollTop:0},500);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
           		 return false;
			});

		// 点击加减数量
		function shopnum() {
			var num=1;
			$(".information-number-reduce").click(function() {
				num++;
				$(".information-number-center").html(num);
			});
			$(".information-number-plus").click(function() {
				num--;
				if (num<=1) {
					num=1;
				}
				$(".information-number-center").html(num);
			});
		}
shopnum();





		//
		//
		// // 点击立即购买时生成商品ID和商品数量
		$("#buy").click(function () {
			var commodityNum=$(".information-number-center").html();
			$.cookie("id0","0");
			$.cookie("num0",commodityNum);
		});
		// // 点击加入购物车时生成商品ID和商品数量
		$("#gocar").click(function () {
			var commodityNum=$(".information-number-center").html();
			$.cookie("id1","1");
			$.cookie("num1",commodityNum);
		});

});
