import { render } from "@testing-library/react";
import glass from "../images/icons8-magnifying-glass-50.png"
import Window from "./App";


function Search(){
    return(
        <div style={{height: "300px", width: "100%"}} className="d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center vstup " style={{background: "linear-gradient(180deg, #5F6395 0%, rgba(50, 52, 82, 0.57) 100%)", width: "400px", height: "80px"}}> {/* Header */}

                <input type="text" placeholder="Zadejte místo..."></input> 
                <div id="circle"><img src={glass} alt="glass" onClick={Conversion} id="lupa"></img></div>

            </div>
        </div>

    )

}

function Conversion(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Appp />);
    console.log("ea")
}

export default Search;