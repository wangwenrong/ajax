window.onresize = function () {
    document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
};
var __pageWindth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
document.querySelector("html").setAttribute("style", "font-size:" + __pageWindth / 7.5 + "px")