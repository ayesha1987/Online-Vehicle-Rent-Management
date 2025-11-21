import { useState } from "react";
import AdminNav from "../AdminNav";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/product.action";
import { Route, useNavigate } from "react-router-dom";

function AddVehicalForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setcategory] = useState("");
  const [productPicture, setProductPicture] = useState([]);
  const dispatch =useDispatch()
  

  const handalpicture=(e)=>{
    setProductPicture([
        ...productPicture,
        e.target.files[0]
    ])
  }
  console.log("pppicture: ",productPicture);
const navigate=useNavigate()
  const submithandlar =(e)=>{
e.preventDefault()
    const form =new FormData();
    form.append('name',name)
    form.append('price',price)
    form.append('description',description)
    form.append('booked',"Notbooked")
    form.append('category',category)
    for(let pic of productPicture){
        form.append('productPicture',pic)
    }

    // console.log("fffffffffffeeeeeeeeffffff:",form);

    dispatch(addProduct(form))
    navigate('/product')
    window.location.reload();

    
  }
  
  return (
    <>
      <AdminNav />
      <div className="every">
        <div>
          <div className="firstcontainer fistcontainerinad">
            <div className="titled">Add Vehicles</div>
            <div className="content">
              <form enctype="multipart/form-data" onSubmit={submithandlar}>
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Vehicle Brand Name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                      placeholder="Enter Vehicle Brand"
                      required
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Price per day</span>
                    <input
                      type="text"
                      value={price}
                      onChange={(e)=>{setPrice(e.target.value)}}
                      placeholder="Enter price per day"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Description</span>
                    <input
                      type="text"
                      value={description}
                      onChange={(e)=>{setDescription(e.target.value)}}
                      placeholder="Enter about vehicle"
                      required
                    />
                  </div>

                  <div className="input-box">
                  <span className="details">Category</span>
                    <select value={category} onChange={(e)=>{setcategory(e.target.value)}} >
                        <option ></option>
                        <option value="bike">Bike</option>
                        <option value="car">Car</option>
                        <option value="EV_bike">EV Bike</option>
                        <option value="EV_car">EV Car</option>
                        <option value="others">Others</option>
                    </select>

                    
                  </div>

                  <div className="input-box">
                    <span className="details">Picturs</span>
                    <input
                      type="file"
                      name="productPicture"
                      onChange={handalpicture}
                      required
                   
                    />
                  </div>
                </div>

                <div className="button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    value="Add Vehicle"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddVehicalForm;
