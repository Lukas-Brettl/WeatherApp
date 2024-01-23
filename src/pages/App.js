
import glass from "../images/icons8-magnifying-glass-50.png"
import weather from "../images/icons8-weather-144.png"
import pressure from "../images/icons8-pressure-96.png"
import humidity from "../images/icons8-humidity-100.png"



const Window = () => {
    return (
        <div className="conatiner-fluid d-flex justify-content-center "> 
          <div className="mt-3" id="app_main_container">

            <div className="d-flex align-items-center vstup "> {/* Header */}

            
              <input type="text" placeholder="Zadejte místo..."></input> 
              <div id="circle"><img src={glass} alt="glass" onClick={get_weather}></img></div>

            </div>
            <div className="d-flex flex-column align-items-center telo"> {/* Status weather */}

              <img src={weather} alt="weather"></img>
              <h3 id="teplota">0°C</h3>
              <h3 id="stav">Jasno</h3>

            </div>

            <div className="d-flex mt-2 text-white foot"> {/* Footer */}
              
              <div class="div_mezera">
                <img src={pressure} alt="pressure"></img>
                <div>
                  <h4>tlak</h4>
                  <h4 id="pressure_val">72 km/h</h4>
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
      const api_key = "31021b81e505ad9563bb551d51ceb87d"
      
      var prelozeny_stav
      var stav_prekladac = { 
        "Clear": "Jasno",
        "Clouds": "Zataženo",
        "Rain": "Déšť",
        "Snow": "Sněží",
        "Mist": "Mlha",
        "Fog": "Hustá mlha",
        "Thunderstorm": "Bouřka",
        "Drizzle": "Mrholení",
        "Haze": "Mlha"} 
      const place = vstup.value
      const url = "https://api.openweathermap.org/data/2.5/weather?&appid=" + api_key + "&q=" + place
      fetch(url).then(res => res.json()).then(data => humidity_val.innerText = (data.main.humidity) + "%")
      fetch(url).then(res => res.json()).then(data => teplota_val.innerText = (Math.floor(data.main.temp - 273.15)) + "°C")
      fetch(url).then(res => res.json()).then(data => pressure_val.innerText = (data.main.pressure) + "hPa")
      fetch(url).then(res => res.json()).then(data => 
      { if (data.weather[0].main in stav_prekladac){
          prelozeny_stav = stav_prekladac[data.weather[0].main]
          stav.innerText = prelozeny_stav
      }
        else{
          console.log("aaaaaaaaa")
        }});
    

    }
};



  
  export default Window;