'use strict';

var IntModule = function(title, length) {

    var that = new InputModule();
    that.title = title;
    that.type = "Int";
    that.length = length;
    var max;
    var min;
    var value;


    if (that.length == 1 || that.length == 0) {
        min = 7;
        max = 9;
    } else {
        var min_string = "1";
        var max_string = "9";
        for (i = 0; i < that.length - 1; i++) {
            min_string += "0";
            max_string += "9";
        }
        min = parseInt(min_string);
        max = parseInt(max_string);
    }

    that.generate_modul = function() {
        value = Math.round(Math.random() * (max - min)) + min;

/* ----------------console.log --------------------*/
        console.log(value);
    }



    jQuery.extend(true, this, that);
}
