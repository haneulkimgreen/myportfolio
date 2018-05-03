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

var arr = [];
  var scrollView = $('.scroll_view');
  var i = 0;
  var sLength = scrollView.length;
  for(; i < sLength; i++){ arr[i] = scrollView.eq(i).offset().top; }
  console.log(arr);

var navWrap = $('.nav_wrap');
var navWrapLi = navWrap.children('ul').children('li');
var body = $("html, body");

// .nav_wrap 목록 클릭 시 해당 영역으로 이동
 navWrapLi.eq(0).children('a').on('click',function(e) {
  e.preventDefault();
  body.stop().animate({scrollTop:arr[0] - 70}, 500, 'swing');
 });
 navWrapLi.eq(1).children('a').on('click',function(e) {
  e.preventDefault();
  body.stop().animate({scrollTop:arr[1] - 70}, 500, 'swing');
 });
 navWrapLi.eq(2).children('a').on('click',function(e) {
  e.preventDefault();
  body.stop().animate({scrollTop:arr[2] - 70}, 500, 'swing');
 });

// .tab_menu 목록 클릭 시 해당 영역으로 이동
var tabListLi = tabList.children('li');

 tabListLi.eq(0).children('a').on('click',function(e) {
  e.preventDefault();
  body.stop().animate({scrollTop:arr[0] - 70}, 500, 'swing');
 });
 tabListLi.eq(1).children('a').on('click',function(e) {
  e.preventDefault();
  body.stop().animate({scrollTop:arr[1] - 70}, 500, 'swing');
 });
 tabListLi.eq(2).children('a').on('click',function(e) {
  e.preventDefault();
  body.stop().animate({scrollTop:arr[2] - 70}, 500, 'swing');
 });

})(this.jQuery);