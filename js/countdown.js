var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var callback, default_fontsize, default_opacity;

var template = sp.require('/js/template');

var cntdiv;
var cnt = 3;

var tick = function() {

    if (cnt > 0) {
        //cntdiv.css({'font-size': default_fontsize, 'opacity': default_opacity});
        //cntdiv.html(cnt);
        
		cntdiv.html(cnt);
		cnt = cnt - 1;
		
        setTimeout(function() {
			tick();
	
		}, 1000);
        
    } else {
        callback();
    }
}

exports.run = function(maindiv, quiz, cbk) {
    callback = cbk;

	template.fetchInto(maindiv, "countdown", function(){
		$('#quiz_name').attr('src', quiz.image);
		cntdiv = $("#countDownNumber");
		
	    //default_fontsize = cntdiv.css('font-size');
	    //default_opacity  = cntdiv.css('opacity');

	    tick();
	});
	
}
