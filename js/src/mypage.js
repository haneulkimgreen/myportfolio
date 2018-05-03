// acg_main.js
(function($) {
// .tab_btn 클릭 시 아이콘 바뀌기, 리스트 나왔다 들어가기
var tabBtn = $('.tab_btn');
var tabList = $('.tab_list');

tabBtn.on('click',function(e) {
  e.preventDefault();
  tabBtn.toggleClass('cancel'); 
  tabList.toggleClass('show');
});


})(this.jQuery);