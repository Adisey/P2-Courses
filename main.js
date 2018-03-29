'use strict';
window.onload = function () {
    var elementFlash = ['h2_1', 'h2_2', 'h2_3']
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
            var child_e = target.parentNode.childNodes;
            for (var child_n in child_e){
                if (child_e[child_n].localName == 'p'){
                    child_e[child_n].hidden = ! child_e[child_n].hidden ;
                }
            }

        }
    };
}