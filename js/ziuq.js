var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

quiz = sp.require('js/quiz');

exports.init = function() {
    console.log("zuiq#init");

    setTimeout(function() {
        console.log("Running quiz");

        quiz.run('#quiz');
    }, 0001);
}
