

        var x = document.getElementById("demo");

        var longi;
        var latit;

        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        }

        function showPosition(position) {
            latit = position.coords.latitude;
            longi = position.coords.longitude
            var api_site = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latit + ',' + longi + '&key=AIzaSyDk-AxNqY23k1mYut_PONIEXrQRNmytdHA';
        $.getJSON(api_site, function(data) {   
            var text = `${data.plus_code.compound_code}`     
            var last_comma = 0;        
            for (i = text.length; i > 0; i--) {
                if (text.charAt(i) === ',') {
                    last_comma = i;
                    break;
                }
            }
            var finaltext = text.substring(last_comma + 2, text.length);
            $(".mypanel").html(finaltext);
        });
        }

        

