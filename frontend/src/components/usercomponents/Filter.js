import React, { useEffect } from "react";
import { useState } from "react";

function Filter(props){
   
let filterdata=props.filterdata
let category=props.category
let setCategory=props.setCategory
    
    
    function filterHandler(title){
        setCategory(title)
    }




    return(
        <div className="btnDiv">
            {
                filterdata.map((data)=>(
                    
                        <button onClick={()=>(filterHandler(data.title))} >{data.title} </button>
                    
                ))
            }
        </div>
    )
}

export default Filter