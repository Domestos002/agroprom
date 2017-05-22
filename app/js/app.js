;(function () {
    $.stellar();
    $(document).ready(function () {

    });

    $(function () {
        $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('sliding-panel-link')) {
                $('body').removeClass('ovh');
                $('.sliding-panel').removeClass('active');
                $('.site-wrapper-content').removeClass('active');
                $(".site-wrapper").css("width", "auto");
                $(".site-wrapper").toggleClass("ovh");

            }
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})();

