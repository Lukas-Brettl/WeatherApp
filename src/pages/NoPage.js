import image from "../images/404-error-image.jpg"
import { Link } from "react-router-dom"
const NoPage = () => {
  return (
    <div style={{position: "absolute", background: "#0a243b", width: "100%", height: "100%"}} 
    className="container-fluid d-flex flex-column  justify-content-center align-items-center">
      <img src={image} alt="404" id="chyba">
      </img>
      <Link to="/" style={{ textDecorationColor: "white"}}><h3 style={{ color: "white" }} className="pt-4">Přejít na hlavní stránku</h3></Link>
    </div>
  )

};

export default NoPage;