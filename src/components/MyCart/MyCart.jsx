

import axios from 'axios';
import useCart from './../../hooks/useCart';
import DataTable from "react-data-table-component";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart,refetch]=useCart()
    console.log(cart);

    const handleDelete=(_id)=>{
        console.log(_id);
        axios.delete(`http://localhost:3000/api/v1/${_id}/delete-cart`)
        .then(result=>{
            console.log(result.data);
refetch()
        })
        
    }

    const columns=[
        {
            name:"No",
            selector:(row,index)=>index+1
        },
        {
            name:"Image",
            selector:(row)=><img className="w-24 h-16 rounded" src={row.image} />
        },
        {
            name:"Name",
            selector:(row)=>row.name
        },
        {
            name:"Price",
            selector:(row)=>`$${row.price}`
        },
        {
            name:"Action",
            cell: (row) => (
                <button onClick={()=>handleDelete(row._id)} className="bg-red-500 px-3 py-1 rounded text-white flex items-center gap-1">
                  <RiDeleteBin6Line /> Delete
                </button>
            )
        }
    ]

    return (
        <div className="my-10 p-4">

            <div className="flex justify-evenly items-center" >
                    <h2>Total Order: {cart.length}</h2>
 
                    <h2>Total Price: ${cart.reduce((total,item)=>total+item.price,0)}</h2>
  
                   {cart.length?<Link to="/dashboard/payment" > <button className="bg-[#D1A054] px-3 py-1 rounded text-lg" >Pay</button></Link>
                   : 
                    <button disabled className="bg-gray-300 px-3 py-1 rounded text-lg" >Pay</button>}
            </div>

        <DataTable 
        columns={columns}
        data={cart}
        pagination
        highlightOnHover
        responsive
        />



        </div>
    );
};

export default MyCart;