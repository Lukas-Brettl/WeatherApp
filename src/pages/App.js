import React, {useState} from "react"
import Search from "./search"
import View from "./view"
export default function Apsp(){
    
    const [search, setSearch] = useState(true)
    const [country, setCountry] = useState("")
  
    function some_change(s){
      if (s){
        setSearch(false)
      }
      else{
        setSearch(true)
      }
    }

    const handleSearchChange = (value) => {
      setCountry(value);
    };

    if (search){
      return(<>
      <Search onSearchChange={handleSearchChange}/>
      <button onClick={() => some_change(true)}>l</button>
      </>)

    }

    if(!search){
      return(      
      <>
        <View country={country}/>
        <button onClick={() => some_change(false)}>l</button>
      </>
      )
    }
    
}

