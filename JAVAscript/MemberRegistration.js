$(document).ready(function() {
	var t1=false;
	var t2=false;
	var t3=false;
	// 中国大陆手机号码正则
	var phoneNumberzz=/1\d{10}/;
	// 密码正则
	var passwordNumberzz=/^[a-z0-9_-]{6,18}$/;
	// 文本框失去焦点
	$("form :input").blur(function () {
		// 手机号码框
		if ($(this).is('#phoneNumber')) {

			if ($(this).val() !== "" && $(this).val().length==11&&phoneNumberzz.test($(this).val())) {
				$("#phoneNumberprompt").html("可以使用").css({"color":"#0AE63B"});
				t1=true;
			}else{
				$("#phoneNumberprompt").html("请输入11位手机号码").css({"color":"red"});
				t1=false;
			}
		}
		// 密码框1
		if ($(this).is('#passwordNumber1')) {
			if ($(this).val()!==""&&passwordNumberzz.test($(this).val())) {
				$("#passwordNumberprompt1").html("可以使用").css({"color":"#0AE63B"});
				t2=true;
			}else{
				$("#passwordNumberprompt1").html("请输入6-18位密码").css({"color":"red"});
				t2=false;
			}
			
		}
		if ($(this).is('#passwordNumber2')) {
			if ($(this).val()==$('#passwordNumber1').val()&&$(this).val()!=="") {
				$("#passwordNumberprompt2").html("两次密码一致").css({"color":"#0AE63B"});
				t3=true;
			}else{
				$("#passwordNumberprompt2").html("两次密码不一致").css({"color":"red"});
				t3=false;
			}
		}

	});

		$("#registerBtn").click(function () {
			if (t1==t2==t3) {
					alert("注册成功");
				 window.location.href="http://www.boy.com/duanjianxin/html/signIn.html";
			 }else{
				alert("注册失败");
			}
		});



		// 返回顶部
			$(".side-up").click(function () {
				$("html,body").animate({scrollTop:0},500);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
           		 return false;
			});
});
