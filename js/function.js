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
    $('.line6').addClass("animate");
    $('.animate').one(animationEvent,
        async function () {
            await $('.loadercontainer').css('animation', 'rmvloader 0.5s ease')
            $('.loadercontainer').css('top', '-2000px')
            var typed = new Typed(".text-slider", {
                strings: ['UX Designing', 'App Development', "Fullstack Development", "Backend Development"],
                typeSpeed: 50,
                loop: true,
                backDelay: 1200,
                backSpeed: 30,
            });
        });
});