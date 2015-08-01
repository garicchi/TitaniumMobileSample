function windowOpen(e) {
    
}

function getWeather(e){
	var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city="+$.cityId.value;
 	console.log(url);
 	var client = Ti.Network.createHTTPClient({
     onload : function(e) {
     	var json =  JSON.parse(this.responseText);
        var weather = json.forecasts[0].telop;
        alert('今日の天気は'+weather);
         
     },
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     }
 	});
 	client.open("GET", url);
 	client.send();
    
}

$.index.open();
