/********************************************************************************************************************************************************************
----------------------------------------------------------------------------------MODULE OVERVIEW--------------------------------------------------------------------
INT MODULE
The Int Module generate random integer with a specail length. It exept two parameter.
1. Title of the module
2. Length of the Integer
Example: IntModule("VierstelligeGanzzahl", 4)

BOOLEAN MODULE
The Boolean Module generate choose a random value of two given values. It extept 3 parameter.
1. Title of the module
2. First value
3. Second value
Example: BooleanModule("Anrede","Frau", "Herr")

**********************************************************************************************************************************************************************/


'use strict';
var objBC = new IntModule("bla", 4);
objBC.generate_modul();

var objBF = new BooleanModule("blanr2", "frau", "herr");
objBF.generate_modul();
