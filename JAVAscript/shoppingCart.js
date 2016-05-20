
$(document).ready(function() {





	// 获取cookie的id    值为0;
	var cokId=$.cookie("id0");
	// 获取cookie的数量
	var cokNum=$.cookie("num0");
	// 获取cookie的id    值为0;
	var cokId1=$.cookie("id1");
	// 获取cookie的数量
	var cokNum1=$.cookie("num1");

	// 动态创建商品
	$.ajax({
		url: '../html/shoppingCart-sp.html',
		type: 'GET',
		dataType: 'html',
		success:function (ree) {
			$("#tbodydoad").append(ree);
		}
	});





	// alert(cokNum);
			$.ajax({
				url: '../JAVAscript/shoppingCart.json',
				type: 'GET',
				dataType: 'json',
				success:function(res){
				 res.shopping[cokId].number=cokNum;
				 res.shopping[cokId].subtotal=res.shopping[cokId].univalent*res.shopping[cokId].number;
					funllIn(res);
				}

			});
			function funllIn(res) {
					 // console.log(res.shopping[cokId].title)
					var  carsrc=res.shopping[cokId].src;
					var  cartitle=res.shopping[cokId].title;
					var  cartaxation=res.shopping[cokId].taxation;
					var  carunivalent=res.shopping[cokId].univalent;
					var  carnumber=res.shopping[cokId].number;
					var  carweight=res.shopping[cokId].weight;
					var  carsubtotal=res.shopping[cokId].subtotal;
						// $('.show-img img').attr('src',img);
							// $('.title').html(title);

					$("#shoppingImgsrc").attr("src",carsrc);
					$("#shoppingTitle").html(cartitle);
					$("#shoppingTaxation").html(cartaxation);
					$("#shoppingUnivalent").html(carunivalent+'元');
					$("#tableNumber-number").attr("value",cokNum);
					$("#shoppingWeight").html(carweight);
					$("#shoppingSubtotal").html(carsubtotal+'元');


				}



				$(document).ajaxStop(function(){
					//获得单价
					var price=parseInt($("#shoppingUnivalent").html());
					// 获得数量
					var n=parseInt($("#tableNumber-number").val());
					$(".settlementBox span").html(price*n);
					// 加 按钮
					$("#tableNumber-reduce").click(function () {
						 // console.log($("#shoppingUnivalent").html())

						// //获得单价
						// var price=parseInt($("#shoppingUnivalent").html());
						// // 获得数量
						// var n=parseInt($("#tableNumber-number").val());
						n++;

						$("#tableNumber-number").val(n);
						// console.log(n)
						//数量(n)*单价price == 总价
						var allprice=0;
						for (var i = 0 ; i < $('#shoppNumb').length;i++){
							allprice=allprice+parseInt($("#tableNumber-number").eq(i).val())*parseInt($("#shoppingUnivalent").eq(i).html());
						}

						$('#shoppingSubtotal').html(allprice+'元');
						$(".settlementBox>p>span").html(allprice);
					});


					// 减
					$("#tableNumber-plus").click(function () {
						//获得单价
						var price=parseInt($("#shoppingUnivalent").html());
						// 获得数量
						var n=parseInt($("#tableNumber-number").val());
						if(n >1){
							n--;
							}
						$("#tableNumber-number").val(n);

						//数量(n)*单价price == 总价
						var allprice=0;
						for (var i = 0 ; i < $('#shoppNumb').length;i++){
							allprice=allprice+parseInt($("#tableNumber-number").eq(i).val())*parseInt($("#shoppingUnivalent").eq(i).html());
						}

						$('#shoppingSubtotal').html(allprice+'元');
						$(".settlementBox>p>span").html(allprice);
					});
					// 删除
					$("#del").click(function(event) {
						$("#shoppNumb").remove();
						$(".settlementBox span").html(0);
					});

});







				// 返回顶部
			$(".side-up").click(function () {
				$("html,body").animate({scrollTop:0},500);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
           		 return false;
			});



});
