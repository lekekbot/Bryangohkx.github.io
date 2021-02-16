// pdf thing 
function render() {
    state.pdf.getPage(state.currentPage).then((page) => {
        var canvas = document.getElementById("pdf_renderer");
        var ctx = canvas.getContext('2d');
        var viewport = page.getViewport(state.zoom);
        canvas.width = viewport.width;
        canvas.height = viewport.height;
    });
}

$(document).ready(function() {
    // Check if body height is higher than window height :)
    if ($("body").height() > $(window).height()) {
    }else{
        $('.footerrow').css('position', 'fixed')
        $('.footerrow').css('bottom', 0)
    }
    // Check if body width is higher than window width :)
});

window.onbeforeunload = function (e) {
    window.onunload = function () {
        window.localStorage.clear()
    }
    return undefined;
};