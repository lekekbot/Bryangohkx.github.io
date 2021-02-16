
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
        if ($(this).offset().top - 60 <= scrollDistance) {
            $('.tabs').removeClass('active');
            $('.tabs').eq(i).addClass('active');
        }
    });
}).scroll();
