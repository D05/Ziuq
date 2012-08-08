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
        $('#A').data('num', 1);
        $('#B .answerText').html(question.alternatives[2]);
        $('#B').data('num', 2);
        $('#C .answerText').html(question.alternatives[3]);
        $('#C').data('num', 3);
        $('#D .answerText').html(question.alternatives[4]);
        $('#D').data('num', 4);

        var time = now();
        $('.answer').click(function() {
            $('.answer').unbind('click');
            var answer = $(this);
            var answer_num = answer.data('num');

            if (answer_num == question.correct_answer) {
                var timediff = (now() - time) / 1000.0;
                cbks.onCorrect(answer_num, timediff);
                answer.css('background', 'rgb(119,211,125)');
                setTimeout(function() { cbks.onComplete(); }, 500);
            } else {
                cbks.onIncorrect(answer_num);
                answer.css('background', 'rgb(210,107,90)');
                $('.answer').each(function(i,a) {
                    var a = $(a);
                    if (a.data('num') == question.correct_answer)
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
