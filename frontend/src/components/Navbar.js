import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from '../assets/OIG4.ghtteoacORClL-removebg-preview.png'
import logo2 from '../assets/large.png'
import toast from "react-hot-toast";

function Navbar(props){

    let IsLogin=props.IsLogin
    let setIsLogin=props.setIsLogin
    return(
        <div className="Wraper">

            <div className="img_name">
                <Link to="/">
                    <img className="logo_img" src={logo} alt="Symbol"  width={120} height={120} loading="lazy" />
                </Link>
                <h1 className="carname" >VehicleForRent</h1>

            </div>
            
            <nav className="nav_warper">
                <ul>
                    <li>
                        <NavLink className="link" to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/contact">CONTACT</NavLink>
                    </li>
                    <li>
                    <NavLink className="link" to="/admin">ADMIN</NavLink>
                    </li>
                </ul>
            </nav>

            <nav className="nav2">
                <ul>

                   {
                    !IsLogin&&
                    <li>
                        <NavLink className="link" to="/login" 
                        
                        >Log in</NavLink>
                    </li>
                    }



                    
                        <li>
                        <NavLink className="link" to="/signup">Sign up</NavLink>
                    </li>
                    
                



                    
                    {/* {
                        !setIsLogin&&
                        <li>

                        <NavLink onClick={()=>{
                            setIsLogin(false)
                            toast.success("Logged Out Suessfully")
                        }} className="link" to="/signin">Log out</NavLink>
                    </li>
                    } */}


                </ul>
            </nav>

        </div>
    );
}

export default Navbar;