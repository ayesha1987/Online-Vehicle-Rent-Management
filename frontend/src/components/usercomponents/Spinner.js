import React from "react";
import './Spinner.css'

function Spinner(){
    
    return(
        
        <div className="spinnerwraper">
            <div className="spinner"></div>
            <p className="spinnertext">Loading....</p>
        </div>
        
    )
    
}

export default Spinner