function getSlider1PaddingLeft() {
    leftOffset = $(".leftOffset").offset().left;
    $(".slider_1_wrapp").css({
        "padding-left" : leftOffset - 10 + "px"
    });
}

function getWrappPadding() {
    $("#wrapper").css({
        "padding-top" : $("#headerSite").height() + "px"
    });
}

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getActiveMenu() {
    
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
});

$(window).resize(function() {
    getSlider1PaddingLeft();
    getWrappPadding();
    getAnimation();
});

$(document).scroll(function() {
    getAnimation();
});

$(document).ready(function() {

    getSlider1PaddingLeft();
    getWrappPadding();
    getAnimation();

    if( $(".slider_1").length > 0 ) {
        $(".slider_1").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            autoplay: true,
            variableWidth: true,
            autoplaySpeed: 7000,
            speed: 1200,
            appendArrows: $("#appendArrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.svg"></button>',
            // slidesToShow: 1,
            // slidesToScroll: 1,
            // fade: true,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
        });
    }

    if($('#pagination-container').length > 0) {
        var items = $("#pagination .thumb_5");
        var numItems = items.length;
        var perPage = 12;
        items.slice(perPage).hide();
        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            // itemsOnPage: 2,
            displayedPages: 3,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
    }

    // -----------

    $(".accordion_item").each(function() {
        if(!$(this).hasClass("active")) {
            $(this).find(".accordion_item_descript").slideUp(300);
        }
    });

    $(".accordion_item_title").on("click", function(e) {
        e.preventDefault();
        parent = $(this).closest(".accordion_item");
        dropdown = parent.find(".accordion_item_descript");
        wrapp = parent.closest(".accordion_wrapp");
        if(parent.hasClass("active")) {
            dropdown.slideUp(300);
            parent.removeClass("active");
        } else {
            wrapp.find(".accordion_item_descript").slideUp(300);
            wrapp.find(".accordion_item").removeClass("active");
            parent.addClass("active");
            dropdown.slideDown(300);
        }
    });

    // ------------

    $(".thumb_3 input").on("change", function(e) {
        if($(this).is(":checked")) {
            $(".thumb_4").removeClass("disable");
            $(".thumb_4 input").prop("checked", false);
            $("#checkoutBtn").addClass("disable");
            $("#chPrice").text("");
            parent = $(this).closest(".thumb_3");
            region = parent.find(".regionJS").text();
            $(".regionAppend").text(region);
            parent.find(".pricesValsJS").each(function() {
                levelValJS = $(this).find(".levelValJS").text();
                priceValJS = $(this).find(".priceValJS").text();
                oldPriceValJS = $(this).find(".oldPriceValJS").text();
                payLinkJS = $(this).find(".payLinkJS").text();
                // console.log(levelValJS);
                $(".thumb_4").each(function() {
                    levelJS = $(this).find(".levelJS").text();
                    // console.log(levelValJS +"   "+ levelJS +"  "+ payLinkJS);
                    if(levelValJS == levelJS) {
                        $(this).find(".priceApped").text(priceValJS);
                        $(this).find(".oldPriceApped").text(oldPriceValJS);
                        if(payLinkJS == "") {
                            $(this).addClass("disable");
                        }
                    }
                });
            });
        }
    });

    $(".thumb_4 input").on("change", function(e) {
        if($(this).is(":checked")) {
            parent = $(this).closest(".thumb_4");
            levelJS = parent.find(".levelJS").text();
            beJS = parent.find(".beJS").text();
            pureJS = parent.find(".pureJS").text();
            lootJS = parent.find(".lootJS").text();
            $(".levelAppend").text(levelJS);
            $(".beAppend").text(beJS);
            $(".pureAppend").text(pureJS);
            $(".lootAppend").text(lootJS);
            $(".thumb_3").each(function() {
                if($(this).find("input").is(":checked")) {
                    $(this).find(".levelValJS").each(function() {
                        if($(this).text() == levelJS) {
                            wrapp = $(this).closest(".pricesValsJS");
                            payLink = wrapp.find(".payLinkJS").text();
                            priceApped = parent.find(".priceApped").text();
                            $("#checkoutBtn").removeClass("disable");
                            $("#checkoutBtn").attr("href", payLink);
                            $("#chPrice").text(priceApped);
                        }
                    });
                }
            });
        }
    });

    // ---------

    $('.rateit').rateit({max: 5});

    // ---------

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var hrefAttr = $(this).attr("href");
        $('a[href^="#"]').removeClass("active");
        if( hrefAttr.length > 0 && hrefAttr != "#" ) {
            $('html, body').stop().animate({
                'scrollTop': $(hrefAttr).offset().top+2
            }, 500);
            $(this).addClass("active");
        }
        if($("#respNav").hasClass("visible") && $(".resp_bg").hasClass("visible")) {
          $("#respNav").removeClass("visible");
          $(".resp_bg").removeClass("visible");
        }
    });


});



