'use strict';

var BooleanModule = function(title, x, y) {

    var that = new InputModule();
    that.title = title;
    that.type = "Boolean"
    that.x = typeof x !== 'undefined' ? x : true;
    that.y = typeof y !== 'undefined' ? y : false;

    // generate_modul function
    that.generate_modul = function() {
            var value;
        if (Math.random() >= 0.5) {
            value = that.x;
        } else {
            value = that.y;
        }
        return value;
    }
    $.extend(true, this, that);
}
