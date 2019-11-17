
function getTracks() {
var dict = {
	"indonesia": "37i9dQZEVXbObFQZ3JLcXt",
	"UK": "37i9dQZEVXbLnolsZ8PSNw",
	"luxembourg": "37i9dQZEVXbKGcyg6TFGx6",
	"india": "37i9dQZEVXbLZ52XmnySJg",
	"singapore": "37i9dQZEVXbK4gjvS1FjPY"
	/*
		...more coming
	*/
};

var api_endpoint = 'https://api.spotify.com/v1/playlists/' + dict["UK"] + '/tracks';

$.ajax({
         url: api_endpoint,
         data: { signature: authHeader },
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('Authentication', 'Bearer BQAWhjEMpQ9qIfMneTR4w3j37yhQtvJ8iA5nRt46BxBE_suWzmipq8GQClWufzugAZw2cXK794CURSJZpWmX2byVcTwDhvAMfikTmHVSNUlLCooBkImibwRwd_IPqsyCC9lkID8fq4hNBPkgOX1987Qt6qSE13gqbbMRXVEyCNdYZ8DA0QuUin87orheqvs0Anxzfv36RTcmyH7E2-apu5MbQ4yKN250nSQinCbwRSb4zxzsiiXWuD7kpdXneNPxhE420IBGEGjg7erCaGd-XIczkPrl2UxOlA');},
         success: function() { alert('Success!' + authHeader); }
      });
}