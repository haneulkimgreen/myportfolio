// yg_renewal_main.js
(function($) {
  $(window).on('scroll',function(e) {
    var myScroll = $(this).scrollTop();
    var headBox = $('#headBox');
    if (myScroll <= 0){
      headBox.css({'boxShadow': '0 0 0 0'});
    }else{
      headBox.css({'boxShadow': '0 -3px 20px 1px #777'});
    }
  });

  // 상단 이미지 바꾸기
/*  var topImg = $('.yg_top_mockup');
  setTimeout(function(e) {
    
    topImg.css({'backgroundImage': 'url(' + '../img/yg/mockup/yg_mockup_02.png' + ')'})
  },1000);
*/

})(this.jQuery);