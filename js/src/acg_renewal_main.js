// acg_renewal_main.js
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

})(this.jQuery);