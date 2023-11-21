import { RiDeleteBin6Line } from 'react-icons/ri';
import useMenu from '../../hooks/useMenu';
import SectionTitle from './../SectionTitle/SectionTitle';
import { FiEdit } from "react-icons/fi";
import DataTable from 'react-data-table-component';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';
const ManageItems = () => {
    const [menu,,refetch]=useMenu()
    // console.log(menu);
    const axiosSecure=useAxiosSecure()

    const handleUpdateMenuItem=(_id)=>{
        console.log(_id,'update');
    }

    const handleDeleteMenuItem=async(_id)=>{
        // console.log(_id,'delete');
        const res=await axiosSecure.delete(`/api/v1/${_id}/delete-menu-item`)
        // console.log(res.data);
        if(res.data.deletedCount>0){
            alert('delete successful')
            refetch()
        }
    }

    const columns=[
        {
            name:"No",
            selector:(row,index)=>index+1
        },
        {
            name:"Image",
            selector:(row)=>(
                <img src={row.image} />
            )
        },
        {
            name:"Item Name",
            selector:(row)=>row.name
        },
        {
            name:"Price",
            selector:(row)=>row.price
        },
        {
            name:"Action",
            cell: (row) => (
                <Link to={`/dashboard/updateMenuItem/${row._id}`} >
                <button onClick={()=>handleUpdateMenuItem(row._id)}  className="bg-red-500 px-3 py-1 rounded text-white flex items-center gap-1">
                  <FiEdit />
                </button>
                </Link>
            )
        },
        {
            name:"Action",
            cell: (row) => (
                <button onClick={()=>handleDeleteMenuItem(row._id)}  className="bg-red-500 px-3 py-1 rounded text-white flex items-center gap-1">
                  <RiDeleteBin6Line />
                </button>
            )
        }
    ]

    return (
        <div className="p-4" >
            <SectionTitle heading="Manage Items" subHeading="Hurry Up!" />


            <div className="flex justify-evenly" >
    <h2>Total Items: {menu.length} </h2>
</div>

<DataTable className="mt-10"   
        columns={columns}
        data={menu}
        pagination
        highlightOnHover
        responsive
        />


        </div>
    );
};

export default ManageItems;