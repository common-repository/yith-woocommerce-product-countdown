jQuery(function ($) {

    $(document).ready(function ($) {

        $('.ywpc-countdown, .ywpc-countdown-loop, .ywpc-countdown-topbar').each(function () {

            var timer = $('input', this).val().split('.'),
                countdown_div = $('.ywpc-timer', this),
                countdown_html = countdown_div.clone(),
                first_char = ' .ywpc-amount .ywpc-char-' + ( !ywpc_footer.is_rtl ? '1' : '2' ),
                second_char = ' .ywpc-amount .ywpc-char-' + ( !ywpc_footer.is_rtl ? '2' : '1' );

            $('.ywpc-days' + first_char, countdown_html).text('{d10}');
            $('.ywpc-days' + second_char, countdown_html).text('{d1}');

            $('.ywpc-hours' + first_char, countdown_html).text('{h10}');
            $('.ywpc-hours' + second_char, countdown_html).text('{h1}');

            $('.ywpc-minutes' + first_char, countdown_html).text('{m10}');
            $('.ywpc-minutes' + second_char, countdown_html).text('{m1}');

            $('.ywpc-seconds' + first_char, countdown_html).text('{s10}');
            $('.ywpc-seconds' + second_char, countdown_html).text('{s1}');

            countdown_div.countdown({
                until : $.countdown.UTCDate(
                    ywpc_footer.gmt,
                    timer[0],
                    timer[1],
                    timer[2]
                ),
                layout: countdown_html.html()
            });

        });

    });

    $(window).resize(function () {

        $('.ywpc-sale-bar').each(function () {

            var header = $('.ywpc-header', this),
                bar = $('.ywpc-bar', this);

            if (header.html() != '') {

                if ($(this).parent().width() < 530) {

                    header.css('width', '100%');
                    bar.css('width', '100%');

                } else {

                    header.css('width', '');
                    bar.css('width', '');

                }

            } else {

                bar.css('width', '100%');

            }


        });

        var body = $('body'),
            is_admin = body.hasClass('ywpc-admin'),
            ywpc_bar_height = $('.ywpc-topbar').height(),
            admin_bar_height = (is_admin) ? ( $(window).width() > 782 ? 32 : 46) : 0,
            position = body.hasClass('ywpc-bottom') ? 'bottom' : 'top';

        if (position == 'bottom') {

            body.css('padding-bottom', ywpc_bar_height + 'px')

        } else {

            body.css('padding-top', ywpc_bar_height + 'px');

            switch (ywpc_footer.theme) {
                case 'Twenty Fifteen':

                    if (!body.is('.admin-bar')) {
                        body.addClass('admin-bar');
                        body.append('<div id="wpadminbar"></div>');
                    }

                    $('#wpadminbar').css('height', admin_bar_height + ywpc_bar_height);
                    break;

                case 'Twenty Fourteen':

                    $('#masthead').css('top', ywpc_bar_height + admin_bar_height);
                    break;

            }

        }

    }).trigger('resize');

});