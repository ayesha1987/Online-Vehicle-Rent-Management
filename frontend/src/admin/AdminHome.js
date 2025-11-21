import './AdminNav.css'
import backgground from '../assets/_00144760-b564-4217-9b93-ed36a870a9f2.jpeg'
import AdminNav from "./AdminNav";


function AdminHome(){


    return(
        <div >
        <AdminNav/>
        <div  className="homeevery" >
            
            <img width={1235} height={680} src={backgground} alt="" />
        </div>
        </div>
        
    );
}

export default AdminHome;