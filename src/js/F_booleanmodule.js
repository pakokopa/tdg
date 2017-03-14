'use strict';

var BooleanModule = function(title, x, y) {

    var that = new InputModule();
    var value;
    that.title = title;
    that.x = x;
    that.y = y;

    that.generate_modul = function() {
        if(Math.random() >= 0.5){
            value = that.x;
        }else{
            value = that.y;
        }
        console.log(value);
    }
    jQuery.extend(true, this, that);
}
