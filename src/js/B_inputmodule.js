'use strict';

var InputModule = function(title, type, value) {

    var that = this;

// Default Attributs
    that.title = title;
    that.type = type;
    that.returnvalue = value;

// Default generate_modul function
    that.generate_modul = function() {
        console.log("Hello! I'm Default!");
    }
}
