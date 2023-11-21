import axios from "axios";
import { getAuth,signOut } from "firebase/auth";

const axiosSecure=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

const useAxiosSecure = () => {
    const auth=getAuth()
    
    axiosSecure.interceptors.response.use(function(response){
        
        return response
    },async(error)=>{
        const status=error.response.status 
        console.log('status error',status);
        
           if(status===401||status===403){
            signOut(auth)
            .then(()=>{
                
            })
           }
        return Promise.reject(error)
    })
    

    return axiosSecure
};

export default useAxiosSecure;