'use strict';

var ApiModule = function(title, field, region, gender) {

    var that = new InputModule();
    that.title = title;
    that.type = "API";
    that.field = field;
    that.region = typeof region !== 'undefined' ? "region=" + region : "";
    that.parameter_1 = typeof region !== 'undefined' ? "?" : "";
    that.gender = typeof gender !== 'undefined' ? "gender=" + gender : "";
    that.parameter_2 = typeof gender !== 'undefined' ? "&" : "";

    that.generate_modul = function() {

        //API
        $.ajax({
            type: 'GET',
            url: 'https://uinames.com/api/' + that.parameter_1 + that.region + that.parameter_2 + that.gender,
            success: function(data) {
                console.log(data[that.field]);
            }

        });
    }

    $.extend(true, this, that);
}
