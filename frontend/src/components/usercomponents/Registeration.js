
import { useEffect, useState } from 'react';
import Cards from '../components/Cards'
import Spinner from '../components/Spinner';



function Registration() {

  const [loading,setLoading]=useState(true)
  const [details, setdetails] = useState([]);
console.log("details: ",details);

  const getAllData = async () => {
    try{
      const fetchdata= await fetch('http://localhost:4000/api/v1/getcardetails')
      const res = await fetchdata.json()
      setdetails(res)
      
    }

    catch (error) {
      console.log(error);
    }
    setLoading(false)

  };

  useEffect(() => {
    getAllData();
  },[]);




  return (
  <div className='wraperreg'>
    
    <div >
      {
        loading ? (<Spinner/>) : (<Cards cars={details}  />)
      }
    </div>
   
  </div>

    
  );
}

export default Registration;
