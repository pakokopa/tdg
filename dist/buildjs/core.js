'use strict';

var InputModule = function(title, type, value) {

    var that = this;

// Default Attributs
    that.title = title;
    that.type = type;
    that.returnvalue = value;

// Default generate_modul function
    that.generate_modul = function() {
        //console.log("Hello! I'm Default!");
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
        return value;
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
            async: false,
            success: function(data) {
                that.value = data[that.field];
            }
        });
        return that.value;
    }

    $.extend(true, this, that);
}

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

FILE MODULE
The File Module generate a random value of a given local file. It expect two parameter.
1. Title of the Module      | expected
2. filename                 | expected
Example: FileModule("PinguinArten", "penguin_species.txt")
**********************************************************************************************************************************************************************/


'use strict';

// INT MODULE
var objBC = new IntModule("Alter", 15, 54);
console.log(objBC.generate_modul());


// BOOLEAN MODULE
var objBF = new BooleanModule("Anrede", "ja", "nein");
console.log(objBF.generate_modul());


// API MODULE
var objBD = new ApiModule("weiblicherVorname", "name", "germany", "female");
console.log(objBD.generate_modul());


// FILE MODULE
var objBE = new FileModule("PinguinArten","penguin_species.txt");
console.log(objBE.generate_modul());
