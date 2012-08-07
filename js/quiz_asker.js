var sp = getSpotifyApi();
var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var template = sp.require('js/template');

var now = function() {
    return (new Date()).getTime();
}

exports.run = function(maindiv, quiz, questionNo, cntTotal, question, cbks) {
    var track = models.Track.fromURI(question.song);
    var duration = track.duration;


    template.fetchInto(maindiv, 'question', function() {
        var answered = false;
        var time = now();
        var timeout_id = setTimeout(function() { cbks.onIncorrect(); cbks.onComplete(); }, duration);
        models.player.play(track);

        $('img#genre').attr('src', quiz.image);
        $('#questionNumber').text(questionNo + ' av ' + cntTotal);
        $('#questionText').html(question.question);

        $('#A .answerText').html(question.alternatives[1]);
        $('#A').data('no', 1);
        $('#B .answerText').html(question.alternatives[2]);
        $('#B').data('no', 2);
        $('#C .answerText').html(question.alternatives[3]);
        $('#C').data('no', 3);
        $('#D .answerText').html(question.alternatives[4]);
        $('#D').data('no', 4);

        $('.answer').click(function() {
            clearTimeout(timeout_id);
            if (answered) { return; }
            answered = true;

            var answer = $(this);
            if (answer.data('no') == question.correct_answer) {
                var timediff = (now() - time) / 1000.0;
                cbks.onCorrect(timediff);
                cbks.onComplete();
            } else {
                cbks.onIncorrect();
                cbks.onComplete();
            }
        });
    });

}
