import { useState } from "react"
import { motion} from "framer-motion";
import {Modal, Button} from "react-bootstrap"
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


//My old code
//**It's pain to see I didn't use useRef (and other wierd code)**

//so you can see that my beginnings were bad 

const Window = () => {

  const [isarrow, setIsarrow] = useState(">")
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const expandDiv = () => {
    if (expanded){
      setIsarrow(">")
    }
    else{
      setIsarrow("<")
    }
    setExpanded(!expanded);
  }
  

  function is_expanded(){
    if(!expanded){
      return "0px"
    }
    else{
      return "-400px"
    }
  }

  function is_expanded_2(){
    if(!expanded){
      return "0px"
    }
    else{
      return "400px"
    }
  }

  function is_expanded_3(){
    if(!expanded){
      return "0px"
    }
    else{
      return "5px 5px 5px #22222c"
    }
  }


  return (
      <div className="conatiner-fluid d-flex justify-content-center "> 
        <motion.div
        animate={{scale: 1.08, marginLeft: is_expanded()}}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          overflow: "hidden",
        }}
        className="mt-3" id="app_main_container">
          <div style={{width: "358px"}}>
            <div className="d-flex align-items-center vstup "> {/* Header */}
            
            <input type="text" onKeyDown={is_Enter} placeholder="Zadejte zemi..." ></input> 
            <div id="circle" style={{cursor: "pointer"}}><img src={glass} alt="glass" onClick={get_weather}></img></div>

          </div>
          <div className="d-flex justify-content-center  align-items-center telo"> {/* Status weather */}
            <div className="d-flex flex-column align-items-center">
              <img src={clear} alt="weather" id="img_weather"></img>
              <h3 id="teplota">0°C</h3>
              <h3 id="stav">Neznámý stav</h3>
            </div>
            <span onClick={expandDiv}> {isarrow} </span>
          </div>

          <div className="d-flex mt-2 text-white foot"> {/* Footer */}
            
            <div className="div_mezera">
              <img src={pressure} alt="pressure"></img>
              <div>
                <h4>tlak</h4>
                <h4 id="pressure_val"> </h4>
              </div>
            </div>
            <div id="cara">

            </div>
            <div className="div_mezera">
              <img src={humidity} alt="humidity"></img>
              <div>
                <h4>vlhkost</h4>
                <h4 id="humidity_val"> </h4>
              </div>
            </div>
        

          </div>
          </div>
          
          
        </motion.div>
        <motion.div id="third_container" className="mt-3" animate={{marginLeft: is_expanded()}}></motion.div>
        <motion.div animate={{marginLeft: is_expanded_2(), boxShadow: is_expanded_3()}} className="mt-3 d-block" id="second_main_container">
          <span className="fs-4 text-decoration-underline cursor-pointer me-5">Zobrazit radar</span>
          <span>více˄</span>
          <div className="days" style={{marginTop: "100px"}}>
            <h3>Po.</h3>
            <img src={clear} alt="stav počasí" className="forcast_img"></img>
            <h3>0 - 1°C</h3>
          </div>
          <div className="days">
            <h3>Út.</h3>
            <img src={clear} alt="stav počasí" className="forcast_img"></img>
            <h3>0 - 1°C</h3>
          </div>
          <div className="days">
            <h3>St.</h3>
            <img src={clear} alt="stav počasí" className="forcast_img"></img>
            <h3>0 - 1°C</h3>
          </div>
        </motion.div>
        
          {showModal && 
          (<Modal show={showModal}>
            <Modal.Header >
          <Modal.Title>Nepodařilo se nám najít požadovanou zemi   :(</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Zkuste zadat název země v angličtině
        </Modal.Body>
        <Modal.Footer>
        <Button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Zavřít</Button>
        </Modal.Footer>
          </Modal>
            
          )}  
        
   
      
          
  </div>
   

  )

  function is_Enter(event){
    if (event.key === "Enter"){
      get_weather()
    }
  }
    
    function get_weather(){
      const vstup = document.querySelector("input")
      if (vstup.value !== ""){
        var humidity_val = document.getElementById("humidity_val")
        var teplota_val = document.getElementById("teplota")
        var pressure_val = document.getElementById("pressure_val")
        var stav = document.getElementById("stav")
        var img_weather = document.getElementById("img_weather")
        
        
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
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        
        const url = "https://api.openweathermap.org/data/2.5/weather?&appid=" + API_KEY + "&q=" + place
        
    

        
        try {
          fetch(url)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              humidity_val.innerText = `${data.main.humidity}%`;
              teplota_val.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
              pressure_val.innerText = `${data.main.pressure}hPa`;
        
              if (data.weather[0].main in stav_prekladac) {
                prelozeny_stav = stav_prekladac[data.weather[0].main].at(0);
                img_weather.src = stav_prekladac[data.weather[0].main].at(1);
                stav.innerText = prelozeny_stav;
              } else {
                stav.innerText = 'Stav Nenalezen';
              }
            })
            .catch(() => {
              setShowModal(true);
              
              
            });
        } catch{
          setShowModal(true);
        }
        
        vstup.value = '';
      }
      
    }




  
  };      

  


export default Window;