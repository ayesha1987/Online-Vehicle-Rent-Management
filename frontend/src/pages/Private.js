import { Outlet } from "react-router-dom"
import Login from "./Login"

function Private(){

    const token=window.localStorage.getItem('token')
    
    if(token){
       
        return(
            
        <Outlet/>
    )
    }
    else{
        return(
            <Login/>
        )
    }
}
export default Private