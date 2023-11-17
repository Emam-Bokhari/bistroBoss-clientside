import { useContext } from "react";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import axios from "axios";
import useCart from './../../hooks/useCart';


const FoodCard = ({item}) => {
    const {name, image, price, recipe,_id} = item;

    const {user}=useContext(AuthContext)
    const [,refetch] =useCart()


    const handleAddToCart=(food)=>{
        console.log(food);

        const cartItem={
        email:user?.email,
        menuId:_id,
        name,
        price,
        image 
        }

        axios.post("http://localhost:3000/api/v1/add-to-cart",cartItem)
        .then(result=>{
            console.log(result.data);
            refetch()
        })

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;