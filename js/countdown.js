// var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var callback, default_fontsize, default_opacity;

var cntdiv = $('<div id="countdown"/>');
var cnt = 5;

var tick = function() {

    if (cnt > 0) {
        cntdiv.css({'font-size': default_fontsize, 'opacity': default_opacity});
        cntdiv.html(cnt);
        cnt = cnt - 1;

        cntdiv.transition({ 'font-size': '60pt' }, 800, function() {
            cntdiv.transition({ 'opacity': 0 }, 200, function() {
                tick();
            });
        });
    } else {
        callback();
    }
}

exports.run = function(maindiv, cbk) {
    callback = cbk;

    maindiv.html(cntdiv)
    default_fontsize = cntdiv.css('font-size');
    default_opacity  = cntdiv.css('opacity');

    tick();
}
