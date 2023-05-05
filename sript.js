
let input=document.getElementById("input")
let button=document.getElementById("button")
let cityname=document.getElementById("city")

let city=input.value;


async  function GetWeather(){

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04325052fcmshad36642399163ffp19316cjsn14abb003c4d7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
    };

 
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
            cityname.innerHTML=city;
            document.getElementById("temp").innerHTML=result.temp
            document.getElementById("min-temp").innerHTML=result.min_temp
            document.getElementById("max-temp").innerHTML=result.max_temp
            document.getElementById("cloud").innerHTML=result.cloud_pct
            document.getElementById("fells like").innerHTML=result.feels_like
            document.getElementById("humidity").innerHTML=result.humidity
            document.getElementById("wind").innerHTML=result.wind_speed
            document.getElementById("sunrise").innerHTML=result.sunrise
            document.getElementById("sunset").innerHTML=result.sunset



    } catch (error) {
        console.error(error);
    }
 }

 

 button.addEventListener("click",GetWeather)

 GetWeather()
 


 
