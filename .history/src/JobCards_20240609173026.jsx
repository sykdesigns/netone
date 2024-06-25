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

            <div>
                <p>{ industry }</p>
                <p>{ projectSummary }</p>
            </div>

            <div>
                <p>{ billingRateW2 }</p>
                <p>{ billingRateIC }</p>
            </div>

            <div>
                <button>View Details</button>
                <button>Apply Now</button>
            </div>

        </div>
    );
}

export default JobCards;