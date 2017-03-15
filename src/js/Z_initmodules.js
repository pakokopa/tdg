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
