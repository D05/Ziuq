var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var quiz_questions = sp.require('js/quiz_questions');
var quiz_asker = sp.require('js/quiz_asker');

var i = 0;
var cntCorrect = 0;
var cntIncorrect = 0;
var score = 0;

var questions;

var theCallback, theQuiz, theMaindiv;

var tick = function(maindiv, quiz, cbk) {
    var question = questions[i];

    if (question) {
        i = i + 1;

        quiz_asker.run(theMaindiv, theQuiz, i, questions.length, question, {
            onCorrect:   function(time) {
                cntCorrect = cntCorrect + 1;
                score = score + (100.0/time);
            },
            onIncorrect: function() { cntIncorrect = cntIncorrect + 1; },
            onComplete:  function() { tick(); },
        });
    } else {
        theCallback(theQuiz, score, questions.length, cntCorrect, cntIncorrect);
    }
}

exports.run = function(maindiv, quiz, cbk) {
    questions = quiz_questions.questions[quiz.id];
    theMaindiv = maindiv;
    theQuiz = quiz;
    theCallback = cbk;

    tick();
}
