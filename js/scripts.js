$(document).ready(function() {
   
    if ($(window).width() > 960) {
        $('.news-grid .col-sm-12').each(function() {
            var p_height = $(this).children('.single-news-box').children('.news_content').children('.new-wrap').outerHeight();
            if (p_height <= 48) {
                $(this).children('.single-news-box').children('.news-more').hide()
            }
        })
    }
   
        $(function() {
            $(".dropdown").hover(function(e) {
				e.preventDefault();
				if ($(window).width() > 992) {
					$('.dropdown-menu', this).stop(!0, !0).show("fast");
					$(this).addClass('open');
					$('b', this).toggleClass("caret caret-up")
				}
            }, function(e) {
				e.preventDefault();
				 if ($(window).width() > 992) {
					$('.dropdown-menu', this).stop(!0, !0).hide("fast");
					$(this).removeClass('open');
					$('b', this).toggleClass("caret caret-up")
				 }
            })
        });
		// for ipad click out side menu to hide sub menu
			$('html,body').on('click touchstart', function (e) {
				if ($(e.target).closest('.dropdown').length == 0)
					{
						if ($(window).width() > 992) {
							$('.dropdown').removeClass('open');
							$('.dropdown-menu').hide();
						}
					}
		});
});

$(window).load(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > $("header").outerHeight() + $('.sub-nav').outerHeight()) {
            $("body").addClass('fixed_nav')
        } else {
            $("body").removeClass('fixed_nav')
        }
        var currentScroll = $(this).scrollTop();
        if (currentScroll > 100) {
            $('.link-to-top').fadeIn(800)
        } else {
            $('.link-to-top').hide()
        }
    });
    $('.link-to-top').click(function() {
        var body = $("html, body");
        body.stop().animate({
            scrollTop: 0
        }, '300', 'swing', function() {
            isScrollOnClick = !1
        });
        $('#news-years ul li a').removeClass('active-year');
        $('#news-years ul li:first-child a').addClass('active-year')
    });
    $('#news-years ul li a').on("click touchstart", function() {
        $('#news-years ul li a').removeClass('active-year');
        $(this).addClass('active-year');
        var get_id = $(this).attr('data-title');
        if ($('body').hasClass('fixed_nav')) {
            var get_pos = $('#' + get_id).offset();
            var crt_pos = $('header').outerHeight() + $('.sub-nav').outerHeight() + $('#news-years').outerHeight();
            var scroll_top = get_pos.top - crt_pos
        } else {
            var get_pos = $('#' + get_id).offset();
            var crt_pos = $('header').outerHeight() + $('.page-title').outerHeight() + $('.sub-nav').outerHeight() + $('#news-years').outerHeight() + 30;
            var scroll_top = get_pos.top - crt_pos
        }
        var body = $("html, body");
        body.stop().animate({
            scrollTop: scroll_top
        }, '300', 'swing', function() {})
    });
    $('#view-opening').click(function() {
        var get_offset = $('.current-opning').offset().top;
        var scroll_value
        if ($(window).width() > 767) {
            scroll_value = get_offset - ($('.navbar ').outerHeight() + $('.sub-nav').outerHeight() + 30)
        } else {
            scroll_value = get_offset - ($('.navbar ').outerHeight() + $('.sub-nav').outerHeight())
        }
        var body = $("html, body");
        body.stop().animate({
            scrollTop: scroll_value
        }, '300', 'swing', function() {})
    });
    var no_tagline = $('.career-tag-lines p').length;
    $('.career-tag-lines p:first-child').css('margin-top', -($('.career-tag-lines p:first-child').height() / 2) + "px");
    var i = 0;
    setInterval(function() {
        if (i < no_tagline) {
            var crt_el = $('.career-tag-lines p').eq(i);
            $('.career-tag-lines p').css('margin-top', "0");
            $('.career-tag-lines p').eq(i).css('margin-top', -(crt_el.height() / 2) + "px");
            $('.career-tag-lines p').prop('class', " ").hide();
            $('.career-tag-lines p').eq(i).prop('class', " ").fadeIn();
            i++
        } else {
            i = 0
        }
    }, 3000);
    Contentheight();
    $(function() {
        function reposition() {
            var modal = $(this),
                dialog = modal.find('.modal-dialog');
            modal.css('display', 'block');
            dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2))
        }
        $('.modal').on('show.bs.modal', reposition);
        $(window).on('resize', function() {
            $('.modal:visible').each(reposition);
            if ($(window).width() > 960) {}
        })
    })
});

function Contentheight() {
    if ($(window).width() >= 768) {
        $(".content-wrap-height").each(function() {
            $(this).find(".content-wrap").css("height", $(this).height())
        })
    } else {
        $(".content-wrap").removeAttr("style")
    }
}
var slideRight = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});
var slideRightBtn = document.querySelector('#c-button--slide-right');
slideRightBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideRight.open()
});
document.createElement("header");
document.createElement("footer");
document.createElement("section");
document.createElement("aside");
document.createElement("article")