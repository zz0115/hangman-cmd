var randomWord = require("./word.js");
var fs = require("fs");

//letter constructor
function Letter(){
    var r = new randomWord();
    var currentWord = r.getRandomWord();

    var letterArray = [];

    this.getLetter = function(){    
        // console.log(currentWord);
        splitWord = currentWord.split("");
        for(var i=0;i<splitWord.length;i++){
            var letter = splitWord[i];
            // console.log(letter);
            
            letterArray.push(letter);
        }
        // console.log(letter);
        // console.log(letterArray);
        return letterArray;
        
    }
    this.getHiddenWord = function(){
        var hiddenWord = "";
        // console.log(currentWord);
        for(var j=0;j<currentWord.length-1;j++){
            hiddenWord+="_ ";
        }
        hiddenWord+="_";
        // console.log(hiddenWord);
        return hiddenWord;
        
    }

}
// var l = new Letter();
// l.getLetter();
// l.getHiddenWord();

module.exports = Letter;
