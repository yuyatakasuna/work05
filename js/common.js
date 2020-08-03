

//ページトップボタン表示・非表示用

$(function() {
    var topBtn = $('.pagetopButton');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
        if ($(this).scrollTop() > 370) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 370) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	/*$(window).resize(function() {
    topBtn.clearQueue();
    topBtn.hide();
	});*/
});


//スマホ専用フロート表示・非表示用

$(function() {
    var headerSp = $('.spFloatWrap01');
    headerSp.hide();
    //スクロールが100に達したらボタン表示
        if ($(this).scrollTop() > 140) {
            headerSp.fadeIn();
        } else {
            headerSp.fadeOut();
        }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            headerSp.fadeIn();
        } else {
            headerSp.fadeOut();
        }
    });
	/*$(window).resize(function() {
    headerSp.clearQueue();
    headerSp.hide();
	});*/
});




