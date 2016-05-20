$(document).ready(function() {

     //

     // li滑入显      end

     $.ajax({
         url: '../html/menu2-sp.html',
         type: 'GET',
         dataType: 'html',
         success:function (res) {
             menuSp(res);
         }
     });

    // //  获取json
    //  $.ajax({
    //      url: '../html/menu2-sp.html',
    //      type: 'GET',
    //      dataType: 'html',
    //      success:function (res) {
    //          menuSp(res);
    //      }
    //  });


     function menuSp(res) {
         // console.log(res);
         for (var i = 0; i < 20; i++) {
             $("#conterframe").append(res);
         }
         // li滑入显
         $(document).ready(function() {
             $("#conterframe li").hover(function() {
                 $(this).css('border', '5px solid #F5F5F5');
                $(this).find($(".conterframeBotton")) .show();
             }, function() {
                 $(this).css('border', '5px solid #ffffff');
                $(this).find($(".conterframeBotton")) .hide();
             });
         });
     }

});
