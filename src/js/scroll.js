$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.nav-item').click(function() {
     // スクロールの速度
     var speed = 400; // ミリ秒
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得
     var position = target.offset().top;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });

   /* TOP-Pageボタン制御 */
   var topBtn = $('.top-btn');
   var windowH = window.innerHeight;
   topBtn.hide();
   //スクロールが100に達したらボタン表示
   $(window).scroll(function () {
       if ($(this).scrollTop() > windowH) {
           topBtn.fadeIn();
       } else {
           topBtn.fadeOut();
       }
   });
   //スクロールしてトップ
   topBtn.click(function () {
       $('body,html').animate({
           scrollTop: 0
       }, 500);
       return false;
   });
});