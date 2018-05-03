// popup.js
(function($) {
  var body = $('body');
  // body내부에 팝업상자 만들기
  body.prepend('<div id="popupBox"><div class="pop_in"><button tabindex="2" type="button">close</button><p></p></div></div>');

  var popup = $('#popupBox');
  var popIn = popup.children('.pop_in');


  popup.css({position:'fixed', top:0, left:0, zIndex:5000, backgroundColor:'rgba(255,255,255,0.9)', width:'100%', height:'auto', boxSizing:'border-box', padding:'1rem'});
  popIn.css({width:'auto', maxWidth:'1000px', margin:'auto'});
  var closeBtn = popIn.find('button');
  closeBtn.css({padding:'0.5rem', backgroundColor:'#2B52A0', color:'#fff', fontWeight:'bold', borderRadius:'0.3rem', float:'right'});

  closeBtn.on('focus',function() {
    $(this).css({backgroundColor:'#2B52A0'});
  });
  closeBtn.on('blur',function() {
    $(this).css({backgroundColor:'#2B52A0'});
  });

  closeBtn.on('click',function(e) {
    e.preventDefault();
    popup.remove();
  });

  var narr = popIn.find('p');
  narr.html('본 사이트는 어떠한 경우라도 상업 및 영리를 목적으로 제작된 페이지가 아니며, <br /> 취업을 목적으로 한 개인 포트폴리오 사이트임을 알려드립니다. <br /> 문제가 되거나, 수정을 원하신다면 메일로 연락주시면 조치를 취하도록 하겠습니다. <br /> rlagksmf0918@gmail.com <br /> 사용된 이미지의 출처는 아래 링크를 통해 확인하세요. <br /> <a tabindex="2" href="./image_link.html" target="_blank">이미지 출처 확인하기<a>');
  narr.find('a').css({color:'#2B52A0', fontWeight:'bold'});
  narr.find('a').on('focus',function() {
    $(this).css({color:'#fff', outline:0, padding:'0.3rem', borderRadius:'0.2rem'}); 
  });
  narr.find('a').on('blur',function() {  
    $(this).css({color:'#2B52A0'}); 
  });

  $(window).on('scroll',function() {
    var scrollResult = $(this).scrollTop();
    if(scrollResult >= 50){
      popup.slideUp(300);
    }else{
      popup.slideDown(300);
    }
  });
})(this.jQuery);