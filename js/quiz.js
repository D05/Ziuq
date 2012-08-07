var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

var maindiv;

// Quiz initialize
exports.run = function(el) {
    maindiv = $(el);

    maindiv.append("We're up!");
}
