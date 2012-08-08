var sp = getSpotifyApi();
var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var quiz_questions = sp.require('js/quiz_questions');
var template = sp.require('js/template');

exports.run = function(maindiv, results, cbk) {
    var questions = quiz_questions.questions[results.quiz.id];

    template.fetchInto(maindiv, 'kill_screen', function() {
       $('#quiz_name').html(results.quiz.name);
       $('#cntTotal').html(results.cntTotal);
       $('#cntIncorrect').html(results.cntIncorrect);
       $('#cntCorrect').html(results.cntCorrect);
       $('#score').html(Math.round(results.score));
       results.scores.forEach(function(s, i) {
           console.log(questions[i].song);
           console.log(questions[i].question);
           console.log(questions[i].alternatives[questions[i].correct_answer]);
           console.log(Math.round(s));
           console.log(results.times[i]);
       });

       $('#save_playlist').click(function() {
           var button = $(this);
           button.unbind('click');
           button.attr('disabled', true);

           var playlist = new models.Playlist('Ziuq: ' + results.quiz.name);
           questions.forEach(function(question) { playlist.add(question.song); });
           button.html('√ Saved');
       });
    });
}
