'use strict';

var InputModule = function(title, type, value) {

    var that = this;

    that.title = title;
    that.type = type;
    that.returnvalue = value;

    that.generate_modul = function() {
        console.log("Hello! I'm Default!");
    }
}
