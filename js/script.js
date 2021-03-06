//makes call to yahoo weather api -> Concatonates user input on city + state to alter urlrequest address
function makePlace(URLcity, URLstate, type) {

    data = '';

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'" + URLcity + "'%2C%20'" + URLstate + "'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                data = xhr.responseText
                showUser(data);


                //      console.log(data);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
    console.log(data);

    //declares and parses data variable. Declared variables for weather display after button click. Calls skiWax & weatherView functions.
    function showUser(data) {
        console.log("show User: ", data);
        data = JSON.parse(data);
        var temperature = data.query.results.channel.item.condition.temp;
        var condition = data.query.results.channel.item.condition.text;
        var showCity = data.query.results.channel.location.city;
        var showState = data.query.results.channel.location.region;
        if (type === "lens") {
            goggleLens(condition);
            weatherViewLens(temperature, condition, showCity, showState)
            
        } else {
            skiWax(temperature);
            weatherView(temperature, condition, showCity, showState);
        }
//        weatherView(temperature, condition, showCity, showState);
        console.log(data);

        //        return temperature;
        //        return showCity;


        // document.getElementById('showme').innerHTML = data.results[0].gender;
    }
}


function weatherView(temperature, condition, showCity, showState) {
    text = '';
    text += "<strong>";
    text += "Weather Information for: " + showCity + "," + showState;
    text += '</strong>';
    text += '<br>';
    text += temperature + '°';
    text += '<br>';
    text += condition;


    document.getElementById("showtemp").innerHTML = text;
}

function weatherViewLens(temperature, condition, showCity, showState) {
    text = '';
    text += "<strong>";
    text += "Weather Information for: " + showCity + "," + showState;
    text += '</strong>';
    text += '<br>';
    text += temperature + '°';
    text += '<br>';
    text += condition;


    document.getElementById('lensWeather').innerHTML = text;
}



function skiWax(temperature) {

    if (parseInt(temperature) > 32 && parseInt(temperature) < 65) {
        document.getElementById('showwax').innerHTML = "We Reccommend: Yellow Wax";
        yellowWax();
        return;
    }

    if (parseInt(temperature) > 25 && parseInt(temperature) < 32) {
        document.getElementById('showwax').innerHTML = "We Reccommend: Red Wax";
        redWax();
        return;
    }

    if (parseInt(temperature) > 18 && parseInt(temperature) < 25) {
        document.getElementById('showwax').innerHTML = "We Reccommend: Violet Wax";
        violetWax();
        return;
    }

    if (parseInt(temperature) > -100 && parseInt(temperature) < 18) {
        document.getElementById('showwax').innerHTML = "We Reccommend: Blue Wax";
        blueWax();
        return;
    } else {
        document.getElementById('showwax').innerHTML = "Sorry. It's too warm to go skiing there.";
        dontSki();

    }

}

function redWax() {
    text = '';
    text += '<img src="img/wax-yellow-bw.png">';

    document.getElementById("wax-yellow").innerHTML = text;

    text = '';
    text += '<img src="img/wax-violet-bw.png">';

    document.getElementById("wax-violet").innerHTML = text;
    text = '';
    text += '<img src="img/wax-blue-bw.png">';

    document.getElementById("wax-blue").innerHTML = text;

    text = '';
    text += '<img src="img/wax-red.png">';

    document.getElementById("wax-red").innerHTML = text;

    text = '';
    text += '<h3>CH8</h3>'
    text += 'Temperature range from -4°C to 4°C (25°F to 39°F). Recommended iron temp: 130°C (266°F). A continuation of the std. CH8. An economic training and racing wax as well as base prep wax for warm skis. Easy to melt and very convenient to work with. The speed of the iron should be approx. 8-10 sec. on a skating or alpine ski. The wax can be re-heated after cooling to room temperature (10 min) for better durability. Important to have a good iron to get an efficient melting of the wax. ';

    document.getElementById('descript').innerHTML = text;
    document.getElementById('showDescription').style.opacity = 1;
}

function yellowWax() {
    text = '';
    text += '<img src="img/wax-red-bw.png">';
    document.getElementById("wax-red").innerHTML = text;

    text = '';
    text += '<img src="img/wax-violet-bw.png">';
    document.getElementById("wax-violet").innerHTML = text;

    text = '';
    text += '<img src="img/wax-blue-bw.png">';
    document.getElementById("wax-blue").innerHTML = text;

    text = '';
    text += '<img src="img/wax-yellow.png">';
    document.getElementById("wax-yellow").innerHTML = text;

    text = '';
    text += '<h3>CH10</h3>'
    text += 'Temperature range from 0°C to 10°C (32°F to 50°F). Recommended iron temp: 120°C (248°F). A new wax for the Cera Nova X line made a slightly harder than the old CH10 Test results show that a harder wax performs better in very wet saturated snow. The adjusted hardness makes it more durable than before. Good wax for base prep and training. For racing we recommend to go with fluoro wax in this temperature area. The speed of the iron should be approx. 8-10 sec. on a skating or alpine ski. The wax can be re-heated after cooling to room temperature (10 min) for better durability. Important to have a good iron to get an efficient melting of the wax.';

    document.getElementById('descript').innerHTML = text;
    document.getElementById('showDescription').style.opacity = 1;
}

function violetWax() {
    text = '';
    text += '<img src="img/wax-yellow-bw.png">';
    document.getElementById("wax-yellow").innerHTML = text;

    text = '';
    text += '<img src="img/wax-red-bw.png">';
    document.getElementById("wax-red").innerHTML = text;

    text = '';
    text += '<img src="img/wax-blue-bw.png">';
    document.getElementById("wax-blue").innerHTML = text;

    text = '';
    text += '<img src="img/wax-violet.png">';
    document.getElementById("wax-violet").innerHTML = text;

    text = '';
    text += '<h3>CH7</h3>'
    text += 'Temperature range from -2°C to -8°C (28°F to 18°F). Recommended iron temp: 140°C (284°F). A new and improved wax that performs great in normal winter conditions below the freezing point. Its hardness makes it convenient to work with and easy to get a good end-result. It is an economic training and racing wax as well as an all round base prep wax. The speed of the iron should be approx. 8-10 sec. on a skating or alpine ski. The wax can be re-heated after cooling to room temperature (10 min) for better durability. Important to have a good iron to get an efficient melting of the wax.  ';

    document.getElementById('descript').innerHTML = text;
    document.getElementById('showDescription').style.opacity = 1;
}

function blueWax() {
    text = '';
    text += '<img src="img/wax-yellow-bw.png">';
    document.getElementById("wax-yellow").innerHTML = text;

    text = '';
    text += '<img src="img/wax-violet-bw.png">';
    document.getElementById("wax-violet").innerHTML = text;

    text = '';
    text += '<img src="img/wax-red-bw.png">';
    document.getElementById("wax-red").innerHTML = text;

    text = '';
    text += '<img src="img/wax-blue.png">';
    document.getElementById("wax-blue").innerHTML = text;

    text = '';
    text += '<h3>CH6</h3>'
    text += 'Temperature range from -5°C to -10°C (23°F to 14°F). Recommended iron temp: 145°C (293°F). Our std. CH6 has been a success in the Cera Nova system, and through comprehensive testing we have not found anything better. It is an economic training and racing wax as well as a base prep wax for cold skis. CH06X has high durability and offer great performance in most snow conditions as well as on artificial and glacier snow. The speed of the iron should be approx. 8-10 sec. on a skating or alpine ski. The wax can be re-heated after cooling to room temperature (10 min) for better durability. Important to have a good iron to get an efficient melting of the wax.   ';

    document.getElementById('descript').innerHTML = text;
    document.getElementById('showDescription').style.opacity = 1;


}

function dontSki(){
    
    text = '';
    text += '<h3>Too Warm</h3>'
    text += 'I am very sorry my friend. It is just too warm to go skiing today. You should go swimming instead';

    document.getElementById('descript').innerHTML = text;
    document.getElementById('showDescription').style.opacity = 1;
}



//declares and parses data variable. Declared variables for weather display after button click. Calls skiWax & weatherView functions.
function showUser(data) {

    data = JSON.parse(data);
    var temperature = data.query.results.channel.item.condition.temp;
    var condition = data.query.results.channel.item.condition.text;
    var showCity = data.query.results.channel.location.city;
    var showState = data.query.results.channel.location.region;
    skiWax(temperature);
    //        goggleLens(condition);
    weatherView(temperature, condition, showCity, showState);
    console.log(data);

    //        return temperature;
    //        return showCity;


    // document.getElementById('showme').innerHTML = data.results[0].gender;
}

function goggleLens(condition) {
    
    
 
    var sunnyLenses = ['Sunny', 'Mostly Sunny', 'fair', "clear" ];
    for (var i = 0; i < sunnyLenses.length; i++) {
        if (condition.toLowerCase() === sunnyLenses[i].toLowerCase()) {

            document.getElementById('showlens').innerHTML = "We Reccommend: " + '<br>' +"Polarized Lenses";
             text = '';
            text += '<img src="img/lens-mirror-bw.png">';
            document.getElementById('lens-mirror').innerHTML = text;
            
            text = '';
            text += '<img src="img/lens-polarized.png">';
            document.getElementById('lens-polarized').innerHTML = text;
            
            text = '';
            text += '<img src="img/lens-photochromic-bw.png">';
            document.getElementById('lens-photochromic').innerHTML = text;
            
             text = '';
    text += '<h3>Polarized Lenses</h3>'
    text += 'A polarizing filter/s primary function is to reduce glare from sunlight on snow or water ';

    document.getElementById('descriptLens').innerHTML = text;
    document.getElementById('lensDescription').style.opacity = 1;
            return;
        }
    }
    var mostlyCloudedLenses = ['Severe Thunderstorms', 'Thunderstorms', 'Mixed Rain and Snow', 'Mixed Rain and Sleet', 'Mixed Snow and Sleet', 'Freezing Drizzle', 'Drizzle', 'Freezing Rain', 'Showers', 'Snow Flurries', 'Light Snow Showers', 'Blowing Snow', 'Snow', 'Hail', 'Sleet', 'Dust', 'Foggy', 'Haze', 'Smoky', 'Cloudy', 'Mostly Cloudy', 'Mixed Rain and Hail', 'Heavy Snow', 'Scattered Snow Showers', 'Thundershowers', 'Snow Showers', 'Isolated Thundershowers'];
    for (var i = 0; i < mostlyCloudedLenses.length; i++) {
        if (condition === mostlyCloudedLenses[i]) {

            document.getElementById('showlens').innerHTML = "We Reccommend " + "Mirror Lenses";
            
            text = '';
            text += '<img src="img/lens-mirror.png">';
            document.getElementById('lens-mirror').innerHTML = text;
            
            text = '';
            text += '<img src="img/lens-polarized-bw.png">';
            document.getElementById('lens-polarized').innerHTML = text;
            
            text = '';
            text += '<img src="img/lens-photochromic-bw.png">';
            document.getElementById('lens-photochromic').innerHTML = text;
            
            text = '';
    text += '<h3>Mirror Lenses</h3>'
    text += 'Mirrored lenses have a partial or full lens coating on the outside of the outer lens. This reflects more light and thus allows in less light (by between 10% and 50%) than non-mirrored lenses.';

    document.getElementById('descriptLens').innerHTML = text;
    document.getElementById('lensDescription').style.opacity = 1;
            
            return;
        }
    }

    if (condition === 'Partly Cloudy') {

        document.getElementById('showlens').innerHTML = "We Reccommend " + "Photochromic lens";
        
         text = '';
            text += '<img src="img/lens-mirror-bw.png">';
            document.getElementById('lens-mirror').innerHTML = text;
            
            text = '';
            text += '<img src="img/lens-polarized-bw.png">';
            document.getElementById('lens-polarized').innerHTML = text;
            
            text = '';
            text += '<img src="img/lens-photochromic.png">';
            document.getElementById('lens-photochromic').innerHTML = text;
        
        text = '';
    text += '<h3>Photochromic Lenses</h3>'
    text += 'These lenses automatically change their tint level according to conditions and UV intensity. The more sun and UV rays, the darker the lenses become. If it/s snowing or overcast the lens stays lighter. Indoors, they always stay light no matter the light intensity. ';

    document.getElementById('descriptLens').innerHTML = text;
    document.getElementById('lensDescription').style.opacity = 1;
        
        return;
    } else {
        document.getElementById('showlens').innerHTML = "Photochromic Lenses - No Result";
    }

}

//begin John's snow total
function makeTotal(URLstate, URLcity, type) 
{
//    var URLcity = document.getElementById('userCity').value;
//    var URLstate = document.getElementById('userState').value;
    snowData = '';
    var xhrequest = new XMLHttpRequest();
    xhrequest.open("GET", "http://api.wunderground.com/api/b2485cf3c23e21c8/geolookup/conditions/q/"+URLstate+"/"+URLcity+".json", true);
    
    xhrequest.onload = function (e){
    if(xhrequest.readyState ===4){
    if(xhrequest.status ===200){
    snowData = xhrequest.responseText
    snowTotal(snowData);
    }else{
        console.error(xhrequest.statusText);
    }
    }
    };
    xhrequest.onerror = function(e){
    console.error(xhrequest.statusText);
    };
    xhrequest.send(null);
    
    

function snowTotal(snowData,temperature)
    {
        snowData = JSON.parse(snowData);
        
        
        var windDir = snowData.current_observation.wind_dir;
        var windSpeed = snowData.current_observation.wind_mph;
        var windChill = snowData.current_observation.windchill_f;
        var humidity = snowData.current_observation.relative_humidity;
        var precipToday = snowData.current_observation.precip_today_in;
        var precipHourly = snowData.current_observation.precip_1hr_in;
        if (type === "skis") {
            skiSelection(temperature,precipToday);
        snowView(windDir,windSpeed,windChill,humidity,precipToday,precipHourly); 
            
        }
//        skiSelection(temperature,precipToday);
//        snowView(windDir,windSpeed,windChill,humidity,precipToday,precipHourly); 
   
        
    }}
        
 //Adds parsed information from weather underground api to the view.
function snowView(windDir,windSpeed,windChill,humidity,precipToday,precipHourly) 
{
    text = '';
    text += 'Wind Direction: ' + windDir;
    text += '<br>';
    text +='Wind Speed: '+ windSpeed;
    text += '<br>';
    text += 'Wind Chill: '+ windChill;
    text += '<br>';
    text += 'Humidity: ' + humidity ;
    text += '<br>';
    text += 'Total Snowfall Today: ' + precipToday +'in.';
    text += '<br>';
    text += 'Snowfall rate: ' + precipHourly + 'in/hr';
    

console.log(text);
    document.getElementById("showsnow").innerHTML = text;
}

//Checks temp. and snowfall total and suggests what ski's to use
function skiSelection(temperature,precipToday)
{
    
    if (parseInt(precipToday) > 1 && parseInt(precipToday) < 15 && parseInt(temperature) > -100 && parseInt(temperature) < 30) {
         document.getElementById('showSkis').innerHTML = "We Reccommend: " + "All-Mountain Skis";
        
        text = '';
    text += '<h3>All Mountain Skis</h3>'
    text += 'Best for groomed terrain (all levels, including moguls), or a mix of groomed and powder. Sometimes called carvers, all-mountain skis are suited for all age groups, both genders and any experience level. Narrow waists, up to 90mm, deep sidecuts, and rockered tips make them easy to turn. They hold an edge on groomed routes and hard snow, and high-end models can satisfy performance expectations of expert-class skiers. ';

    document.getElementById('descriptSkis').innerHTML = text;
    document.getElementById('skisDescription').style.opacity = 1;
        skiWidth();
        return;
    }
    
    if (parseInt(precipToday) > 10 && parseInt(precipToday) < 100 && parseInt(temperature) > 31 && parseInt(temperature) < 40) {
        document.getElementById('skisuggestion').innerHTML = " For fresh powder go with a waist log greater than 109 mm ";
        
        text = '';
    text += '<h3>Powder Skis</h3>'
    text += 'Best for powder, backcountry and occasional groomed runs. As the name implies, these skis perform best when skiing deep powder snow. Sometimes called super-fats, powder skis typically have waist widths of 109mm and higher for men/s skis and 100mm and higher for women/s skis to provide flotation and a surf-like, playful feel. Most feature a fully rockered profile to further boost flotation, enhance maneuverability and keep edges from catching. Be aware that they’re not built for precise turns on groomed runs, but they are absolutely the best choice for a memorable day when the powder is deep. ';

    document.getElementById('descriptSkis').innerHTML = text;
    document.getElementById('skisDescription').style.opacity = 1; 
        
        skiWidth();
        return;
    }
    
     if (parseInt(precipToday) > 10 && parseInt(precipToday) < 30 && parseInt(temperature) > 41 && parseInt(temperature) < 45) {
        document.getElementById('skisuggestion').innerHTML = "We Reccommend: " + "All-Mountain  Fat Skis";
         
         text = '';
    text += '<h3>All Mountain Wide Skis</h3>'
    text += 'Best for groomed runs and powder. These skis can handle it all. Sometimes also called mid-fats or fats, these skis have wide waists of 91mm-109mm, which enhance flotation in soft snow without sacrificing too much agility on groomed slopes. They efficiently cut through sloppy snow and provide stability in crusty, variable snow. ';

    document.getElementById('descriptSkis').innerHTML = text;
    document.getElementById('skisDescription').style.opacity = 1; 
         
        skiWidth();
        return;
    }else{
         skiWidth();
        document.getElementById('showSkis').innerHTML = "We Reccommend: " + "All-Mountain Skis";
        
        text = '';
    text += '<h3>All Mountain Skis</h3>'
    text += 'Best for groomed terrain (all levels, including moguls), or a mix of groomed and powder. Sometimes called carvers, all-mountain skis are suited for all age groups, both genders and any experience level. Narrow waists, up to 90mm, deep sidecuts, and rockered tips make them easy to turn. They hold an edge on groomed routes and hard snow, and high-end models can satisfy performance expectations of expert-class skiers. ';

    document.getElementById('descriptSkis').innerHTML = text;
    document.getElementById('skisDescription').style.opacity = 1;
    }
    
    
}

function skiWidth()
{
//    text = '';
//    text += '<img src = "img/skiImage.jpg" >';
//    
//    document.getElementById("skiImage").innerHTML = text;

}



//Swix CH Wax	        Temperature Range	
//CH10 - Yellow	    32°F to 50°F	
//CH8 - Red	        25°F to 34°F	
//CH7 - Violet	    18°F to 28°F	
//CH6 - Blue	        10°F to 20°F