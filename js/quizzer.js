var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var quiz_questions = sp.require('js/quiz_questions');
var quiz_asker = sp.require('js/quiz_asker');
var template = sp.require('js/template');

var i = 0;

var questions;
var scores = new Array;

var callback;

var tick = function(maindiv, quiz, cbk) {
    var question = questions[i];

    if (question) {
        i = i + 1;

        quiz_asker.run(i, questions.length, question, {
            onCorrect:   function(time) {
                scores.push(100.0/time);
            },
            onIncorrect: function() {
                scores.push(0);
            },
            onComplete:  function() { tick(); },
        });
    } else {
        callback(scores);
    }
}

exports.run = function(maindiv, quiz, cbk) {
    questions = quiz_questions.questions[quiz.id];
    callback = cbk;

    template.fetchInto(maindiv, 'question', function() {
        $('img#genre').attr('src', quiz.image);

        tick();
    });
}
