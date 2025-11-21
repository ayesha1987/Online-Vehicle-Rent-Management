import "./Home.css"

import homeimg from "../assets/homecar.png"
import Navbar from "../components/Navbar";
function Home(){
    return(
<div>
    <Navbar/>
    <div className="mindivdiv">
        <div className="home_wraper">
            <div className="hometd">
                <h1 className="head">VehicleForRent</h1>
                <h3 className="head4">Unlock Your Next Adventure with VehicleForRent</h3>
                <p className="discrip">VehicleForRent.com offers a premium vehicle rental service designed to cater to your diverse transportation needs with ease and efficiency. Whether you’re traveling for business, planning a family vacation, or simply need a reliable car for everyday use, our service ensures a smooth and hassle-free experience.</p>
            </div>
            <img className="homeimg" src={homeimg} alt="" />
        </div>
    </div>   
</div>
    );
}

export default Home;