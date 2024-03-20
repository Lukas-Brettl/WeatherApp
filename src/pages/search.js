import React from "react"
import glass from "../images/icons8-magnifying-glass-50.png"
export default function Search(props){
    const handleChange = (event) => {
        props.onSearchChange(event.target.value);
      };

    return(
        <div id="search_content">
            <input type="text" onChange={handleChange}/>
            <img src={glass} alt="search"/>
        </div>
        

    )

}