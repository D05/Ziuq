var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var authentication = sp.require('js/authentication');
var countdown      = sp.require('js/countdown');
var quiz_selector  = sp.require('js/quiz_selector');
var quizzer        = sp.require('js/quizzer');
var kill_screen    = sp.require('js/kill_screen');

var maindiv;

// Quiz initialize
exports.run = function(el) {
    maindiv = $(el);

    // Auth to facebook
    authentication.run(maindiv, function (fbToken) {

    // Select a quiz
    quiz_selector.run(maindiv, function(quiz) {

    // Fancy countdown/splash screen
    countdown.run(maindiv, function() {

    // Run the quiz
    quizzer.run(maindiv, quiz, function(quiz, score, cntTotal, cntCorrect, cntIncorrect) {

    // show killscreen
    var results = {
        'cntTotal': cntTotal, 'cntCorrect': cntCorrect, 'cntIncorrect': cntIncorrect,
        'score': score, 'quiz': quiz, 'fbToken': fbToken
    }
    kill_screen.run(maindiv, results, function() {
        maindiv.html("It's all over, why did we get here?");
    }); }); }); }); });

}
