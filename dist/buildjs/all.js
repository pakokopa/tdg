$(function() {
    // Drag-Elemente erstellen
    $("#list_module li").draggable({
        appendTo: "body",
        helper: "clone",
        // Element am Cursor positionieren
        cursorAt: {
            cursor: "move",
            top: 5,
            left: 0
        }
    });

    // Testdata als Dropzone und Liste sortierbar machen
    $("#list_testdata ol").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ":not(.ui-sortable-helper)",
        drop: function(event, ui) {
            var li_val = ui.draggable.text();
            $(this).find(".placeholder").remove();
            $(this).append('<div class="list_testdata_div"><input type="text" value="Bezeichnung"><li>' + li_val + '</li></div>');
            /*
            $("<li></li>").text(ui.draggable.text()).appendTo(this);
            $(this).append('<input type="text" value="bla">');
            */
        }
    }).sortable({
        items: "div:not(.placeholder)",
        sort: function() {
            $(this).removeClass("ui-state-default");
            $("ul, li").disableSelection();
        }
    });


    // Löschen der Module
    $("#trash").droppable({
        accept: "#list_testdata div",
        hoverClass: 'hovered',
        drop: function(event, ui) {
            removeelement(ui.draggable);
        }
    });
});


// Funktion Löschen
function removeelement($item) {
    $item.remove();
}

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

'use strict';
var objBC = new IntModule("bla", 4);
objBC.generate_modul();

var objBF = new BooleanModule("blanr2", "frau", "herr");
objBF.generate_modul();
