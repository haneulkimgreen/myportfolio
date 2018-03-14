// acg_main.js
(function($) {
  var acg_guide_btn   = $('.acg_guide_btn');
  var acg_guide       = $('#acg_guide');
  var acg_guide_close = $('.acg_guide_close');
  var acg_code_btn   = $('.acg_code_btn');
  var acg_code       = $('#acg_code');
  var acg_code_close = $('.acg_code_close');

  var yg_guide_btn   = $('.yg_guide_btn');
  var yg_guide       = $('#yg_guide');
  var yg_guide_close = $('.yg_guide_close');
  var yg_code_btn   = $('.yg_code_btn');
  var yg_code       = $('#yg_code');
  var yg_code_close = $('.yg_code_close');

  // max640
  // min641 max999
  // min1000
  var rwd = function(){
    var rwdW = parseInt($(window).width());
    var mob = 640;
    var tab = 1000;
    var pc  = 1366;

    if(rwdW <= mob){
      // 모바일
      
    }else if(mob < rwdW && rwdW < tab){
      // 타블렛
    }else if(tab < rwdW && rwdW < pc){
      // 피씨
    }else{
      // pc full
      acg_guide_btn.on('click',function(e) {
        e.preventDefault()
        acg_guide.fadeIn();
      });
      acg_guide_close.on('click',function(e) {
        e.preventDefault();
        acg_guide.fadeOut();
      });
      acg_code_btn.on('click',function(e) {
        e.preventDefault()
        acg_code.fadeIn();
      });
      acg_code_close.on('click',function(e) {
        e.preventDefault();
        acg_code.fadeOut();
      });

      yg_guide_btn.on('click',function(e) {
        e.preventDefault()
        yg_guide.fadeIn();
      });
      yg_guide_close.on('click',function(e) {
        e.preventDefault();
        yg_guide.fadeOut();
      });
      yg_code_btn.on('click',function(e) {
        e.preventDefault()
        yg_code.fadeIn();
      });
      yg_code_close.on('click',function(e) {
        e.preventDefault();
        yg_code.fadeOut();
      });
      // 스크롤 내릴 시 한번에 내려가기
      var arr = [];
      var scrollView = $('.scroll_view');
      var i = 0;
      var sLength = scrollView.length;
      for(; i < sLength; i++){ arr[i] = scrollView.eq(i).offset().top; }
      // console.log(arr);
      var body = $("html, body");
      body.stop().animate({scrollTop:0}, 500, 'swing');


        var viewEq = 0, delta = 0, nowScrollTop = 0;


      scrollView.on('mousewheel DOMMouseScroll',function(e) {
        var E = e.originalEvent;
        var _thisI = $(this).index(); 
        var _thisTop = $(this).offset().top;

        var viewH = scrollView.first().height();
        var viewCut = viewH/5;

        // console.log(_thisI+'번째 위치');
        // console.log('위치값 현재: '+arr[_thisI], '위치값 다음: '+arr[_thisI+1]);
        // console.log('화면높이'+scrollView.first().height());
        // console.log('화면에서 이동위치'+ _thisTop);

        if( body.is(':animated') ){ return; }

        // 스크롤 후에 높이값 파악하기(일정시간 뒤에 파악 500)
        var nowScrollTop = 0;
        setTimeout(function() {
          nowScrollTop = body.scrollTop();
          return nowScrollTop;
        }, 300);
        // console.log(nowScrollTop); // 현재 스크롤 위치 파악
    // ----------------------------------------------------
        // 현재위치에서 (thisI),
        // 마우스 스크롤의 위치파악하고(nowScrollTop),
        // 해당 위치의 값의 기준 arr[_thisI] + 1/3 (viewCut) 지점의 위치를 넘어가지 못하면,
        // 원래 있던 위치로 이동 (arr[_thisI])
        // 해당하는 지점에서 1/3을 넘어가는 시점에서는 다음 위치로 이동 (arr[_thisI+1])
    // --------------------------------------------------------- */
        var baseCutScroll = arr[_thisI] + viewCut;
        var minusCutScroll = arr[_thisI] - viewCut;
        // console.log(baseCutScroll); // 해당 위치의 값의 기준 검증
        (E.detail) ? delta = E.detail * 40 : delta = -E.wheelDelta;  

        // 조건 비교
        var bodyAni = function(count) {
           body.stop().animate({scrollTop:arr[count]}, 500, 'swing');
         };

        setTimeout(function() {
          if(delta > 0){
            (nowScrollTop  < baseCutScroll) ? 
              /*body.stop().animate({scrollTop:arr[_thisI]}, 500, 'swing');*/  bodyAni(_thisI) : 
                /*body.stop().animate({scrollTop:arr[_thisI+1]}, 500, 'swing');*/  bodyAni(_thisI+1);
          }else{
            (nowScrollTop  > minusCutScroll) ? 
              /*body.stop().animate({scrollTop:arr[_thisI]}, 500, 'swing');*/  bodyAni(_thisI) : 
                /*body.stop().animate({scrollTop:arr[_thisI-1]}, 500, 'swing');*/  bodyAni(_thisI-1);
          }
        },400);
      });


    } // 피씨 풀
  }; // rwd
rwd();

// parseInt() 주어진값을 정수형 숫자로 변환처리
// 예: 40px  -> parseInt(40px)  -> 40
// 예2: 43.3 ->  parseInt(43.3) -> 43
  var $w = parseInt($(window).width());
  $(window).on('resize',function(){
    var nowW = $(window).width();
    if($w !== nowW){
      // location.reload();
      rwd();
// 리로드-사이즈 바뀔때마다 새로고침으로 적용
// 아래꺼-비동기처럼 변화를 주겠다
    }
  });
})(this.jQuery);