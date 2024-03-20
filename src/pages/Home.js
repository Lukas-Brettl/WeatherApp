import "../styles.css"
import obrazek_slunce from "../images/obrazek_slunce2.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <> 
      <div className="d-flex justify-content-between ">
        <div id="nadpis">
          <h1>Dolore qui ullamco esse labore cillum est nostrud sunt.</h1>
          <p>Irure dolor adipisicing sint duis elit cillum esse. Lorem laborum nostrud deserunt nisi cillum est ea cillum excepteur ut.</p>
          <div>
            <Link to="/App"><button className="btn btn-danger text-white" id="s_button">Lorem </button></Link>
            <button type="button" className="btn btn-outline-secondary" id="v_button">Ipsum</button>
          </div>
          
        </div>
        <img src={obrazek_slunce} alt="obrazek slunce" className="me-5 pe-5 pt-4" id="obrazek_slunce" />
      </div>
      <div id="container_jak">
        <span>
          <h2>Ullamco ipsum adipisicing ipsum ad ut dolor?</h2>
        </span>
        
      </div>

    </>
    

  )
};

export default Home;