var sp = getSpotifyApi();
// var models = sp.require('sp://import/scripts/api/models');
// var views  = sp.require('sp://import/scripts/api/views');
var auth   = sp.require('sp://import/scripts/api/auth');

var template = sp.require('js/template');

var callback;
var maindiv;

exports.run = function(rMaindiv, rCallback) {
	callback = rCallback;
	maindiv = rMaindiv;
	
	if(localStorage.FbaccessToken && (localStorage.FBttl * 1000 + localStorage.FBtimeout > (new Date().getTime())))
	{
		console.log("Authenticated! Here's the access token: " + localStorage.FbaccessToken);
		callback(localStorage.FbaccessToken);
	}
	else
	{
		//Clear localStorage
		if(localStorage.FbaccessToken)	
			localStorage.remove(FbaccessToken);
		
		//Create the login-view
		template.fetchInto(maindiv, "login", function() {
			$("#auth").click(function () {
				auth.authenticateWithFacebook('331511496942585', ['user_about_me'], {
					onSuccess : function(accessToken, ttl) {
						localStorage.FBttl = ttl;
						localStorage.FbaccessToken = accessToken;
						localStorage.FBtimeout = new Date().getTime();
						console.log("Success! Here's the access token: " + accessToken);
						console.log("Success! Here's ttl: " + ttl);
						callback(localStorage.FbaccessToken)
					},
					onFailure : function(error) {
						console.log("Authentication failed with error: " + error);
					},
					onComplete : function() { 
						console.log("Complete");
					}

				});
			});
		});
	}
	
	
	
	
}
