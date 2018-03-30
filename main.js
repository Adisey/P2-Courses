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
                //console.log(child_e[child_n]);
                if (child_e[child_n].localName == 'div' && child_e[child_n].className == 'vewparag'){
//                    child_e[child_n].offsetHeight = child_e[child_n].offsetHeight /2;
                    child_e[child_n].hidden = ! child_e[child_n].hidden ;
                    console.log('--1--');

//                    child_e[child_n].classList.add('animate');

                }
            }

        }
    };

// ******************************
    color.onclick = function() {
        this.style.backgroundColor = 'red';
    }



}
