var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');
var template = sp.require('/js/template');

exports.run = function(maindiv, quiz, cbk) {
    // mocked
    //cbk(quiz, 10, 7, 3);
	template.fetchInto(maindiv, "question", function (){});
}
