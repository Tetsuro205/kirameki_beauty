// ハンバーガーボタン
var hamburger = $('.header-nav');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-btn').on('click', function () {
  console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('header-nav-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('header-nav-active');
});
// -----------------------------------------------------

// カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed	: 3000,
  infinite: true,
  fade: true,
  dots: false,
  arrows: false,
});
// -----------------------------------------------------

// アコーディオン
// アコーディオンのタイトルがクリックされたら
$('.faq-toggle-btn').on('click', function(e) {
  $(this).parent().next().slideToggle();
  $(this).toggleClass('faq-toggle-btn-active');
});
// -----------------------------------------------------

// Waypoints -----------------------------------------------------------
$('.fadeup-box').waypoint({
  handler: function(direction) {
    if (direction === 'down') {

      $(this.element)
        .addClass('animate__fadeInUpSmall');
    }
  },

  offset: '50%',
});;
