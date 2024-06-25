import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";



const JobCards = () => {

    return (

    
        <div>
            <div>{ logo }</div>
            <div>
                <p>{ postDate }</p>
                <h2>{ position }</h2>
                <CiBookmark />
            </div>

        </div>
    );
}

export default JobCards;