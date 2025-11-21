import axios from "../helpers/axios";
import { productConstants } from "./constants";

  
  
  export const getInitialData = () => {
    return async (dispatch) => {
      const res = await axios.post(`/product/get`);
      if (res.status === 200) {
        const {  products } = res.data;

        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
       
      }
      

      console.log(res);
    };
  };
  