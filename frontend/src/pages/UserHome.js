import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import Cards from "../components/usercomponents/Cards";
import { useEffect, useState } from "react";
import Filter from "../components/usercomponents/Filter";
import logo from "../assets/OIG4.ghtteoacORClL-removebg-preview.png";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import scanner from '../assets/scanner.png'
import { RiLogoutBoxFill } from "react-icons/ri";

const filterdata = [
  {
    id: "1",
    title: "all",
  },
  {
    id: "2",
    title: "bike",
  },
  {
    id: "3",
    title: "car",
  },
  {
    id: "4",
    title: "EV_bike",
  },
  {
    id: "5",
    title: "EV_car",
  },
  {
    id: "6",
    title: "others",
  },
];
function UserHome(props) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function signouthandl() {
    dispatch(signout());
    navigate("/");
  }



  let category = props.category;
  let setCategory = props.setCategory;
const [index,setindex]=useState(0)
  const juser = localStorage.getItem("user");
  const user = JSON.parse(juser);
  const fullname = user.fullName;
  const product = useSelector((state) => state.product);
  const [showonecard, setshowonecard] = useState(null);
  const [date, setdate] = useState();
  const [todates, settodate] = useState();
  const fromdate=new Date(date)
  const todate=new Date(todates)
  


  if (showonecard === null) {
    return (
      <>
        <div className="Wraper">
          <div className="img_name">
            <Link to="">
              <img
                className="logo_img"
                src={logo}
                alt="Symbol"
                width={120}
                height={120}
                loading="lazy"
              />
            </Link>
            <h1 className="carname">VehicleForRent</h1>
          </div>

          <nav className="nav_warper">
            <ul>
              <li className="userhomelink" >
                <NavLink className="link" to="">
                  HOME
                </NavLink>
              </li>
              <li className="link2">
                <NavLink className="link" to="/order">
                  Orders
                </NavLink>
              </li>


            </ul>
          </nav>

          <nav className="nav2">
            <ul>
              <li>
                <NavLink className="link" to="/userprofile">
                  Profile
                </NavLink>
              </li>
              <li className="logoutbuttonuser">
                <button  onClick={signouthandl}>   Log out</button>
                
              </li>

            </ul>
          </nav>
         
        </div>

        <div className="maindiv2">
          <div className="home_wraper">
            <div className="wraperreg">
              <div>
                <Cards
                  products={product.products}
                  showonecard={showonecard}
                  setshowonecard={setshowonecard}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (showonecard) {
    let date1= new Date(fromdate)
    let date2= new Date(todate)
    let diff=date2.getTime()-date1.getTime()
    
    let msinday=1000*3600*24
    let days=(diff/msinday)
    
    let userid = user._id;

    let productid = showonecard._id;
    
    let totalprice = showonecard.price * days;
    


    

    const cartdetailsubmin = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userid,
            productid,
            totalprice,
            user,
            showonecard,
            days,
            fromdate,
            todate
          }),
        });

        let resjson=await res.json();
        console.log("Maincart 1 :",resjson.data);
        if (res.status === 200) {
          toast.success("Vehical Booked");
          
          
        }
        if (res.status === 400) {
          toast.error("You already have rented a vehical");
        }
      } catch (error) {
        console.log(error);
      }
    };

    function imgback(){
      if(index - 1 <0){
        setindex(showonecard.productPicture.length-1)
      }
      else{
        setindex(index-1)
      }
    }

    function imgfront(){
      if(index+1>=showonecard.productPicture.length){
        setindex(0)
      }
      else{
        setindex(index+1)
      }
    }

    function conformvehical(){
      navigate("/bookvehicle");

    }



    // setdays(diff/msinday)

    return (
      <>
        <div className="Wraper">
          <div className="img_name">
            <Link to="">
              <img
                src={logo}
                className="logo_img"
                alt="Symbol"
                width={120}
                height={120}
                loading="lazy"
              />
            </Link>
            <h1 className="carname">VehicleForRent</h1>
          </div>

          <nav className="nav_warper">
            <ul>
              <li className="userhomelink" >
                <NavLink className="link " to="">
                  HOME
                </NavLink>
              </li>
              <li className="link2">
                <NavLink className="link" to="/order">
                  Orders
                </NavLink>
              </li>

             
            </ul>
          </nav>

          <nav className="nav2">
            <ul>
              <li>
                <NavLink className="link" to="/userprofile">
                  Profile
                </NavLink>
              </li>
              <li className="logoutbuttonuser" >
                <button onClick={signouthandl}>Log out</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="maindiv2">
          <div className="home_wraper">
            <div className="wraperreg">
              <div className="backtohomeuser" >
              <button
                onClick={() => {
                  setshowonecard(null);
                }}
              >
               <FaHome size={23} />
              </button>
              </div>
              <div className="mainonecarduser">
                
                <div className="imagediv">
                <div className="bfbuttonu" onClick={imgback} ><FaFastBackward size={20} /></div>
                  {/* {showonecard.productPicture.map((picture) => (
                    <div>
                      <img
                        height={300}
                        width={618}
                        src={require(`../uploads/${picture.img}`)}
                        alt=""
                      />
                    </div>
                  ))} */}


                  <div>
                      <img
                        height={300}
                        width={618}
                        src={require(`../uploads/${showonecard.productPicture[index].img}`)}
                        alt=""
                      />
                    </div>
                  <div className="bfbuttonu"onClick={imgfront} ><FaFastForward size={20} /></div>
                </div>
                <div className="divdescription" >
                <div className="allcolorwhite"> <span className="carduserspan" > Vehical ID</span> : {showonecard._id}</div>
                <div className="allcolorwhite"><span className="carduserspan" > Vehical Name</span> : {showonecard.name}</div>
                <div className="allcolorwhite"><span className="carduserspan" > Price Per Day</span> : {showonecard.price}</div>
                <div className="allcolorwhite"><span className="carduserspan" > Description</span> : {showonecard.description}</div>
                </div>

              </div>
              <div className="aftercomformation" >
                <h1 className="bookingheading" >Booking Vehicle for rent</h1>
{/*               
                <div className="inputcomformdiv">
                   
                <span className="inputspanu" >Days :</span>
                <input
                min={1}
                max={30}
                placeholder="Enter Number of days vehicle for rent"
                required
                  type="number"
                  value={days}
                  onChange={(e) => {
                  setdays(e.target.value);
                  
                  }}
                />
                </div> */}
 

                  <div className="inputcomformdiv">
                  <span className="inputspanu" >From date :</span>
                  <input type="date"
                  value={date}
                 
                  onChange={(e) => {
                  setdate(e.target.value);
                  
                  }}
                  />
                  </div>

                  <div className="inputcomformdiv" >
                  <span className="inputspanu" >To date :</span>
                  <input type="date"
                  
                  value={todates}
                  onChange={(e) => {
                  settodate(e.target.value);
                  }}
                  />
                  </div>

                <div className="totaldays"> Total Amount for {days} days</div>
                <div className="totalprice"> {totalprice} Rs</div>
                <div>Scan and Pay</div>
                <div>
                  <img src={scanner} alt="" />
                </div>
                <div className="conformbtnu" onClick={cartdetailsubmin}  >
                  Confirm
                </div>

              
              </div>
            </div>
            {/* <div>
              <form>
                <div className="allcolorwhite">
                  how meney days vehical for rent:
                </div>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => {
                    setdays(e.target.value);
                  }}
                />
                <div className="allcolorwhite">{totalprice}</div>
              </form>
              <button onClick={cartdetailsubmin}>click</button>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default UserHome;
