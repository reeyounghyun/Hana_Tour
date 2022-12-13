$(document).ready(function () {

    // alert("클릭해주셔서 감사합니다^^");

    var swiper = new Swiper(".m_w_s", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "fraction",
            pauseOnHover: true,

        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    swiper.on('slideChange', function (e) {
        if (swiper.activeIndex == "0") {
            $(".wrapper").css("background-color", "#E2DAF2");
        } else if (swiper.activeIndex == "1") {
            $(".wrapper").css("background-color", "#E4EFD0");
        } else if (swiper.activeIndex == "2") {
            $(".wrapper").css("background-color", "#F1E6CC");
        } else if (swiper.activeIndex == "3") {
            $(".wrapper").css("background-color", "#D5EAFD");
        } else if (swiper.activeIndex == "4") {
            $(".wrapper").css("background-color", "#E2DAF2");
        } else if (swiper.activeIndex == "5") {
            $(".wrapper").css("background-color", "#E4EFD0");
        } else if (swiper.activeIndex == "6") {
            $(".wrapper").css("background-color", "#F1E6CC");
        } else if (swiper.activeIndex == "7") {
            $(".wrapper").css("background-color", "#D5EAFD");
        } else if (swiper.activeIndex == "8") {
            $(".wrapper").css("background-color", "#E2DAF2");
        } else if (swiper.activeIndex == "9") {
            $(".wrapper").css("background-color", "#D5EAFD");
        } else if (swiper.activeIndex == "10") {
            $(".wrapper").css("background-color", "#F1E6CC");
        } else {
            $(".wrapper").css("background-color", "#E4EFD0");
        }

    });

    $(".btn_pause").on('slideChange', function (e) {

        var sw = 0;

        if (sw == 0) {
            $('.btn_pause').addClass('on');
            mySwiper.autoplay.stop();
            sw = 1;
        } else {
            $('.btn_pause').removeClass('on');
            mySwiper.autoplay.start();
            sw = 0;
        }
    });

    //실시간 검색 순위
    var count = $('.rank-list li').length;
    var height = $('.rank-list li').height();

    function step(index) {
        $('.rank-list ol').delay(2000).animate({
            top: -height * index,
        }, 500, function () {
            step((index + 1) % count);
        });
    }

    step(1);
    
    //foo_bit js
    var swiper = new Swiper(".foo_swiper", {
        // centeredSlides: true,
        slidesPerView: 3,
        // spaceBetween: 5,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
            nextEl: ".next-foo",
            prevEl: ".prev-foo",
        },
    });

    //travel_sug js
    var swiper = new Swiper(".tr_sug", {
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
            // delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

});