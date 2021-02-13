function whichAnimationEvent() {
    var t,
        el = document.createElement("fakeelement");

    var animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations) {
        if (el.style[t] !== undefined) {
            return animations[t];
        }
    }
}

var animationEvent = whichAnimationEvent();

$(document).ready(function () {
    if (!sessionStorage.getItem('shown')) {
        $('.line6').addClass("animate");
        $('.animate').one(animationEvent,
            async function () {
                sessionStorage.setItem('shown', true);
                await $('.loadercontainer').css('animation', 'rmvloader 0.5s ease')
                $('.loadercontainer').css('top', '-2000px')
                sessionStorage.setItem('shown', true);
            });
    } else {
        $('.loadercontainer').css('display', 'none')
    }
    var typed = new Typed(".text-slider", {
        strings: ['UX Designing', 'App Development', "Fullstack Development", "Backend Development"],
        typeSpeed: 50,
        loop: true,
        backDelay: 1200,
        backSpeed: 30,
    });
});

// about tabs
$('a[href*=#]').bind('click', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    var scrollToPosition = $(target).offset().top - 58;
    $('html').animate({
        scrollTop: scrollToPosition
        }, 50, function () {
        location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });
    return false;
});


$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $('.page-section').each(function (i) {
        if ($(this).offset().top -60 <= scrollDistance) {
            $('.tabs').removeClass('active');
            $('.tabs').eq(i).addClass('active');
        }
    });
}).scroll();




window.onbeforeunload = function (e) {
    window.onunload = function () {
        window.localStorage.clear()
    }
    return undefined;
};