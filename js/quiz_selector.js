var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');


var template       = sp.require('js/template');
var quiz_questions = sp.require('js/quiz_questions');

exports.run = function(maindiv, cbk) {
    template.fetchInto(maindiv, 'quiz_selector', function() {
        quiz_questions.quizzes.forEach(function(quiz) {
            var div = $('<div class="quiz quiz-' + quiz.id + '"><h2>' + quiz.name + '</h2></div>');
            div.data('quiz', quiz);

            $('#quizzes').append(div);
        });

        $('#quizzes div.quiz').click(function(e) {
            cbk($(this).data('quiz'));
        });
    });
}
