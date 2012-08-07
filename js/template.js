// var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
// var auth   = sp.require('sp://import/scripts/api/auth');

exports.fetchInto = function(maindiv, template_name) {
    $.get('sp://ziuq/html/' + template_name + '.html', function(res) {
        $(maindiv).html(res);
    });
}
