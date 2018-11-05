// dako_position.js
(function($) {
  var close = $('.close');
  close.on('click',function(e) {
    e.preventDefault();
    $(location).attr('href', "../datakobold_main.html");
  });

})(this.jQuery);