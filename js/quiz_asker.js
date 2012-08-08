var sp = getSpotifyApi();
var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var now = function() {
    return (new Date()).getTime();
}

exports.run = function(questionNo, cntTotal, question, cbks) {
    models.Track.fromURI(question.song, function(track) {
        if (!track.playable) { $('#questionText').html('TRACK NOT FOUND!?!?'); return; }
        models.player.play(track);

        $('#questionNumber').text(questionNo + ' av ' + cntTotal);
        $('#questionText').html(question.question);

        $('.answer').css('background', '#DAEDE2')
        $('#A .answerText').html(question.alternatives[1]);
        $('#A').data('no', 1);
        $('#B .answerText').html(question.alternatives[2]);
        $('#B').data('no', 2);
        $('#C .answerText').html(question.alternatives[3]);
        $('#C').data('no', 3);
        $('#D .answerText').html(question.alternatives[4]);
        $('#D').data('no', 4);

        var time = now();
        var timeout_id = setTimeout(function() { cbks.onIncorrect(); cbks.onComplete(); }, track.duration);
        $('.answer').click(function() {
            $('.answer').unbind('click');
            clearTimeout(timeout_id);

            var answer = $(this);
            if (answer.data('no') == question.correct_answer) {
                var timediff = (now() - time) / 1000.0;
                cbks.onCorrect(timediff);
                answer.css('background', 'rgb(119,211,125)');
                setTimeout(function() { cbks.onComplete(); }, 500);
            } else {
                cbks.onIncorrect();
                answer.css('background', 'rgb(210,107,90)');
                $('.answer').each(function(i,a) {
                    var a = $(a);
                    if (a.data('no') == question.correct_answer)
                    {
                        setTimeout(function() {
                            a.css('background', 'rgb(119,211,125)');
                            setTimeout(function() { cbks.onComplete(); }, 500);
                        }, 500);
                    }
                });
            }

        });
    });

}
