import { Link, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Col, Container, Row } from "react-bootstrap";
import './AdminNav.css'
function AdminNav(){


    return(
<div className="adminNavbarsidebar">
    <nav className="sidebar">
      <a href="#"  className="logo">Admin Dashbord</a>
      <div className="menu-content">
        <ul className="menu-items">

            <li className="menulistli" ><u>Menu List </u></li>
            <li><NavLink className='abcde' to='/adminhome' > Home</NavLink></li>
            <li><NavLink to='/product' >Vehicle</NavLink></li>
            <li><NavLink to='/addvehical' >Add Vehicle</NavLink></li>
            <li><NavLink to='/orderdetails' >Order Details</NavLink></li>
            <li><NavLink to='/adminfeedback' >Feedbacks</NavLink></li>
         
        </ul>
      </div>
    </nav>
    <nav className="navbar">
      <i className="fa-solid fa-bars" id="sidebar-close"></i>
      <NavLink to="/" className="logoutbuttonadmin">Logout</NavLink>
      
    </nav>


        </div>
    );
}

export default AdminNav;