'use strict';
window.onload = function () {
    var elementFlash = ['h2_1', 'h2_2', 'h2_3'];
    onmouseover = function (event) {
        var target = event.target;
        if (elementFlash.indexOf(target.id) >= 0) {
            target.style.background = 'cadetblue';
        }
    };
    onmouseout = function (event) {
        var target = event.target;
        if (elementFlash.indexOf(target.id) >= 0) {
            target.style.background = '';
        }
    };
    onclick = function (event) {
        var target = event.target;
        if (elementFlash.indexOf(target.id) >= 0) {
//            target.style.backgroundColor = 'green';
            var child_e = target.parentNode.childNodes;
            for (var child_n in child_e) {
                if (child_e[child_n].localName == 'div' && child_e[child_n].className == 'vewparag') {
                    var bb = child_e[child_n];
                    child_e[child_n].hidden = !child_e[child_n].hidden;
                }
            }

        }
    };

// ******************************
    color_but.onclick = function () {
        this.style.backgroundColor = 'red';
    };
    but_progr.onclick = function () {
        this.style.backgroundColor = 'green';
    };
}