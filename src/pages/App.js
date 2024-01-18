import location from "../images/icons8-location-50.png"
import glass from "../images/icons8-magnifying-glass-50.png"
import weather from "../images/icons8-weather-144.png"
import wind from "../images/icons8-wind-100.png"
import humidity from "../images/icons8-humidity-100.png"



const Window = () => {
    return (
        <div className="conatiner-fluid d-flex justify-content-center "> 
          <div className="mt-3" id="app_main_container">

            <div className="d-flex align-items-center vstup "> {/* Header */}

              <img src={location} alt="location" id="location"></img>
              <input type="text"></input> 
              <div id="circle"><img src={glass} alt="glass"></img></div>

            </div>
            <div className="d-flex flex-column align-items-center telo"> {/* Status weather */}

              <img src={weather} alt="weather"></img>
              <h3>0°C</h3>
              <h3>Stav Počasí</h3>

            </div>

            <div className="d-flex mt-2 text-white foot"> {/* Footer */}
              
              <div class="div_mezera">
                <img src={wind} alt="wind"></img>
                <div>
                  <h4>vítr</h4>
                  <h4>72 km/h</h4>
                </div>
              </div>
              
              <div class="div_mezera">
                <img src={humidity} alt="humidity"></img>
                <div>
                  <h4>vlhkost</h4>
                  <h4>72 %</h4>
                </div>
              </div>
          

            </div>
         </div>
      </div>

    )
  };
  
  export default Window;