import { productConstants } from '../../actions/constants';
import Card from './Card'
// import c_img from '../assets/back2.png'

const Cards=(props)=>{


let vehicals=props.products;
let showonecard=props.showonecard
let setshowonecard=props.setshowonecard




    

        return(
            <div className="CardsMainContainer">
                <div className="Cards2mainContainer">
                   {
                        vehicals.map((vehical)=>(
                            <Card vehical={vehical} showonecard={showonecard} setshowonecard={setshowonecard}  />
                        ))
                   }
                </div>
            </div>    
        )
    }
    


   

export default Cards