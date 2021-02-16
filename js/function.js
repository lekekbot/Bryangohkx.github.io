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

window.onbeforeunload = function (e) {
    window.onunload = function () {
        window.localStorage.clear()
    }
    return undefined;
};