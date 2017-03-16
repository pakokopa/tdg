'use strict';

var FileModule = function(title, filename) {

    var that = new InputModule();
    that.title = title;
    that.filepath = '../../dev/src/csv/' + filename ;



    that.generate_modul = function() {

        $.ajax({
            type: 'GET',
            url: that.filepath,
            async: false,
            success: function(data) {
                var result = data.split("\n");
                var randomline = Math.floor(Math.random() * (result.length - 1)) + 1; ;
                that.value = result[randomline - 1];
            }
        });
        return that.value;
    }


    $.extend(true, this, that);
}
