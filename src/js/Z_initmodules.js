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
//console.log(objBC.generate_modul());


// BOOLEAN MODULE
var objBF = new BooleanModule("Anrede", "ja", "nein");
//console.log(objBF.generate_modul());


// API MODULE
var objBD = new ApiModule("weiblicherVorname", "name", "germany", "female");
//console.log(objBD.generate_modul());


// FILE MODULE
var objBE = new FileModule("PinguinArten","penguin_species.txt");
//console.log(objBE.generate_modul());



$.each(InputModule.instances, function(){
    console.log(this.generate_modul());
});
