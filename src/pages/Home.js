import "../styles.css"
import obrazek_slunce from "../images/obrazek_slunce2.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <> 
      <div className="d-flex justify-content-between ">
        <div id="nadpis">
          
          <h1>Aktuální informace o počasí na jednom místě</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. In enim a arcu imperdiet malesuada. Phasellus faucibus molestie nisl. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis.</p>
          <div>
            <Link to="/App"><button className="btn btn-danger text-white" id="s_button">Lorem </button></Link>
            <button type="button" className="btn btn-outline-secondary" id="v_button">Ipsum</button>
          </div>
          
        </div>
        <img src={obrazek_slunce} alt="obrazek slunce" className="me-5 pe-5 pt-4" id="obrazek_slunce" />
      </div>

    </>
    

  )
};

export default Home;