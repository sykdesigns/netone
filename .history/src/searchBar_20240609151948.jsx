import React, {useState} from "react";
import { PiPlaceholder } from "react-icons/pi";

const searchBar = () => {

    return(
        
        <input 
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={{searchInput}} />
    )
}