'use strict';

var IntModule = function(title, min, max, length) {

    var that = new InputModule();
    that.title = title;
    that.type = "Int";
    that.min = min;
    that.max = max;
    that.length = length;


    // Adds 0 at the beginning
    that.check_length = function(int) {
        int_string = int.toString();
        if (that.length != undefined) {

            int_length = int_string.length;


            for (i = int_length; i < that.length; i++) {
                int_string = "0" + int_string;
                console.log("test");
            }

        }
        return int_string;
    }

    // generate_modul function
    that.generate_modul = function() {
        var random = Math.round(Math.random() * (that.max - that.min)) + that.min;
        var value = that.check_length(random);
        return value;
    }

    $.extend(true, this, that);
}
