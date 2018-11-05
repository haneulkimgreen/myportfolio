// acg_position.js
(function($) {
  var close = $('.close');
  close.on('click',function(e) {
    e.preventDefault();
    $(location).attr('href', "../acg_renewal_main.html");
  });

})(this.jQuery);