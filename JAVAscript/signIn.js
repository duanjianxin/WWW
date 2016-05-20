$(document).ready(function() {
		// // 当input失去焦点的时候执行方法
		// $(".userName>input").blur(function () {
		// 	// 获取输入框内容
		// 	var  nametext = $(".userName>input").val();
		// 	//匹配由数字和26个英文字母组成的字符串
		// 	var matchingName=/^[A-Za-z0-9]+$/;

		// 		if (matchingName.test(nametext)) {
		// 			alert('000')
		// 		}else(
		// 				// alert('请输入用户名')

		// 				$(".login-k").html('用户名有误或输入错误').css({"color":"red","fontSize":"14px"})

		// 			)

		// 	})


		// // 获取密码内容
		// var passwordtext=$(".password>input").val();
		// //匹配由数字和26个英文字母组成的字符串
		// var matchingName=/^[A-Za-z0-9]+$/;


		// $(".password>input").blur(function () {
		// if (matchingName.test(passwordtext)) {
		// 			alert('000')
		// 		}else(
		// 				// alert('请输入用户名')

		// 				$(".login-k2").html('密码有误').css({"color":"red","fontSize":"14px"})

		// 			)
		// })



		$("#signinBtn").click(function(){
			$.ajaxSetup({
				url:"../JAVAscript/form.php",
				type:"GET",
				data:{
                name:$('input[name=phoneNumber]').val(),
//                name:'zmkm',
                password:$('input[name=password]').val()
//                password:'123456'
            }



		});
			$.ajax({
		            success:function(res){
		                console.log(res);
		                login(res);
		            }
		        	});
		});
        function login(res){
            if(res=='0'){
                alert('登录成功');
                window.location.href="http://www.boy.com/duanjianxin/index.0.0.html";
				// 生成cookie
				$.cookie("myname","aaaaa",{path:"/"});

            }else{
                alert('登录失败');
            }
        }

        	// 返回顶部
			$(".side-up").click(function () {
				$("html,body").animate({scrollTop:0},500);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
           		 return false;
			});

	});
