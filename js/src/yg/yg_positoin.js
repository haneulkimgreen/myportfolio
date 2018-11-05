// yg_positoin.js
(function($) {
  var close = $('.close');
  close.on('click',function(e) {
    e.preventDefault();
    $(location).attr('href', "../yg_renewal_main.html");
  });

})(this.jQuery);