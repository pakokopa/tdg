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

// Default Attributs
    that.title = title;
    that.type = type;
    that.returnvalue = value;

// Default generate_modul function
    that.generate_modul = function() {
        console.log("Hello! I'm Default!");
    }
}

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
        console.log(value);
    }

    $.extend(true, this, that);
}

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

'use strict';

var CsvModule = function(title, filepath) {

    var that = new InputModule();
    that.title = title;
    that.filepath = filepath;



            function getRandomLine(){
              fs.readFile('C:\Users\pako\Desktop\penguin_species.csv', function(err, data){
                if(err) throw err;
                var lines = data.split('\n');
                console.log(lines[Math.floor(Math.random()*lines.length)]);
             })
            }
    }

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
        console.log(value);
    }
    $.extend(true, this, that);
}

/********************************************************************************************************************************************************************
----------------------------------------------------------------------------------MODULE OVERVIEW--------------------------------------------------------------------
INT MODULE
The Int Module generate random integer with a specail length. It expect three parameter.
1. Title of the module      | expected
2. Minimum                  | expected
3. Maximum                  | expected
Example: IntModule("Geburtstag", 1, 28)

BOOLEAN MODULE
The Boolean Module generate choose a random value of two given values. It expect at least one parameter.
1. Title of the module      | expected
2. First value              | optional (default: true)
3. Second value             | optional (default: false)
Example: BooleanModule("Anrede","Frau", "Herr")

API MODULE
The API Module generate a user with the following Attributs : name, surname, region and gender. It expect at least two parameter.
1. Title of the Module      | expected
2. Attributs                | expected
3. Filter region            | optional (default : all)
4. Filter gender            | optional (default : all)
Example : ApiModule("WeiblicheVornamenAusDeutschland", "name", "germany", "female")
**********************************************************************************************************************************************************************/


'use strict';

// INT MODULE
var objBC = new IntModule("Alter", 15, 54);
objBC.generate_modul();


// BOOLEAN MODULE
var objBF = new BooleanModule("Anrede", "ja", "nein");
objBF.generate_modul();


// API MODULE
var objZZ = new ApiModule("weiblicherVorname", "name", "germany", "female");
objZZ.generate_modul();


// CSV MODULE
var objXX = new CsvModule("test","bla");
objXX.getRandomLine();
