import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useCart = () => {
    const {user}=useContext(AuthContext)

   const {refetch,data:cart=[]}=useQuery({
    queryKey:['cart',user?.email],
    queryFn:async()=>{
        const result=await axios.get(`http://localhost:3000/api/v1/show-cart-data?email=${user?.email}`)
        return result.data
    }
   })
   return [cart,refetch]
};

export default useCart;