import {  userContants } from "./constants";
import axios from "../helpers/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const signup = (user) => {
  
    console.log(user);
  
    
    return async (dispatch)=>{
            
    
            dispatch({type:userContants.USER_REGISTER_REQUEST});
            const res =await axios.post('/signup',{
                ...user
            })
    
            if(res.status===200){
                const {message}=res.data;
                
                dispatch({
                    type:userContants.USER_REGISTER_SUCCESS,
                    payload:{message}
                })
                toast.success(res.data.message)
                
            
               
                
            }else{
                if(res.status===291){
                    
                    dispatch({
    
                        type:userContants.USER_REGISTER_FAILURE,
                        payload:{error:"somghith went wrong"}
                    })
                    toast.error(res.data.error)
                }
                if(res.status===292){
                    dispatch({
    
                        type:userContants.USER_REGISTER_FAILURE,
                        payload:{error:"somghith went wrong"}
                    })
                    toast.error(res.data.error)
                }
            }
    
        }
    }








