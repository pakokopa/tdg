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
