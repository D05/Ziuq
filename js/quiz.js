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
    countdown.run(maindiv, quiz, function() {

    // Run the quiz
    quizzer.run(maindiv, quiz, function(scores,  times) {

    var score = 0;
    scores.forEach(function(s) { score += s; });

    // show killscreen
    var results = {
        'scores':       scores,
        'times':        times,
        'cntTotal':     scores.length,
        'cntCorrect':   scores.filter(function(s) { return (s != 0); }).length,
        'cntIncorrect': scores.filter(function(s) { return (s == 0); }).length,
        'score':        score,
        'quiz':         quiz,
        'fbToken':      fbToken
    }
    kill_screen.run(maindiv, results, function() {
        maindiv.html("It's all over, why did we get here?");
    }); }); }); }); });

}
