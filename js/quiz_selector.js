var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');


var template       = sp.require('js/template');
var quiz_questions = sp.require('js/quiz_questions');

exports.run = function(maindiv, cbk) {
    template.fetchInto(maindiv, 'quiz_selector', function() {
        quiz_questions.quizzes.forEach(function(quiz) {
            var div = $('<img class="quiz" src="' + quiz.image + '">');
            div.data('quiz', quiz);

            $('#quizzes').append(div);
        });

        $('#quizzes img.quiz').click(function(e) {
            cbk($(this).data('quiz'));
        });
    });
}
