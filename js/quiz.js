var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var authentication = sp.require('js/authentication');
var countdown      = sp.require('js/countdown');

var maindiv;

// Quiz initialize
exports.run = function(el) {
    maindiv = $(el);

    authentication.run(maindiv, function (fbToken) {
        countdown.run(maindiv, function() {
            maindiv.html("now we run the quiz");
        });
    });

}
