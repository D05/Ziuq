var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var template = sp.require('js/template');

exports.run = function(maindiv, results, cbk) {
    console.log(maindiv);
    template.fetchInto(maindiv, 'kill_screen', function() {
       $('#quiz_name').html(results.quiz.name);
       $('#cntTotal').html(results.cntTotal);
       $('#cntIncorrect').html(results.cntIncorrect);
       $('#cntCorrect').html(results.cntCorrect);
       $('#score').html(Math.round(results.score));
    });
}
