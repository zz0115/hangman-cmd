//require random-words npm
var randomWords = require('random-words');

//word constructor
function Word(){
    // this.word = '';
    // this.data = data;
    this.getRandomWord = function(){
        // console.log(randomWords());
        // this.word = randomWords();

        return randomWords();
        // randomWords();
    }
}

// var w = new Word();
// w.getRandomWord();

module.exports = Word;