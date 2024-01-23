
import glass from "../images/icons8-magnifying-glass-50.png"
import clear from "../images/icons8-weather-144.png"
import pressure from "../images/icons8-pressure-96.png"
import humidity from "../images/icons8-humidity-100.png"
import cloudy from "../images/icons8-cloudy-100.png"
import drizzle from "../images/icons8-drizzle-100.png"
import fog from "../images/icons8-fog-100.png"
import rain from "../images/icons8-rain-100.png"
import snow from "../images/icons8-snow-100.png"
import storm from "../images/icons8-storm-100.png"




const Window = () => {
    return (
        <div className="conatiner-fluid d-flex justify-content-center "> 
          <div className="mt-3" id="app_main_container">

            <div className="d-flex align-items-center vstup "> {/* Header */}

            
              <input type="text" placeholder="Zadejte místo..."></input> 
              <div id="circle"><img src={glass} alt="glass" onClick={get_weather}></img></div>

            </div>
            <div className="d-flex flex-column align-items-center telo"> {/* Status weather */}

              <img src={clear} alt="weather" id="img_weather"></img>
              <h3 id="teplota">0°C</h3>
              <h3 id="stav">Jasno</h3>

            </div>

            <div className="d-flex mt-2 text-white foot"> {/* Footer */}
              
              <div class="div_mezera">
                <img src={pressure} alt="pressure"></img>
                <div>
                  <h4>tlak</h4>
                  <h4 id="pressure_val">1000 hPa</h4>
                </div>
              </div>
              <div id="cara">

              </div>
              <div class="div_mezera">
                <img src={humidity} alt="humidity"></img>
                <div>
                  <h4>vlhkost</h4>
                  <h4 id="humidity_val">72 %</h4>
                </div>
              </div>
          

            </div>
         </div>
      </div>

    )
    function get_weather(){
      const vstup = document.querySelector("input")
      var humidity_val = document.getElementById("humidity_val")
      var teplota_val = document.getElementById("teplota")
      var pressure_val = document.getElementById("pressure_val")
      var stav = document.getElementById("stav")
      var img_weather = document.getElementById("img_weather")
      const api_key = "31021b81e505ad9563bb551d51ceb87d"
      
      var prelozeny_stav
      var stav_prekladac = { 
        "Clear": ["Jasno", clear],
        "Clouds": ["Zataženo", cloudy],
        "Rain": ["Déšť", rain],
        "Snow": ["Sněží", snow],
        "Mist": ["Mlha", fog],
        "Fog": ["Hustá mlha", fog],
        "Thunderstorm": ["Bouřka", storm],
        "Drizzle": ["Mrholení", drizzle],
        "Haze": ["Mlha", fog]} 
      const place = vstup.value
      const url = "https://api.openweathermap.org/data/2.5/weather?&appid=" + api_key + "&q=" + place
      fetch(url).then(res => res.json()).then(data => humidity_val.innerText = (data.main.humidity) + "%")
      fetch(url).then(res => res.json()).then(data => teplota_val.innerText = (Math.floor(data.main.temp - 273.15)) + "°C")
      fetch(url).then(res => res.json()).then(data => pressure_val.innerText = (data.main.pressure) + "hPa")
      fetch(url).then(res => res.json()).then(data => 
      { if (data.weather[0].main in stav_prekladac){
          prelozeny_stav = stav_prekladac[data.weather[0].main].at(0)
          img_weather.src = stav_prekladac[data.weather[0].main].at(1)
          stav.innerText = prelozeny_stav

      
   
      }
      else{
       stav.innerText = "Stav Nenalezen"
        }});
    

    }
};



  
  export default Window;