import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../hooks/useAxiosSecure';
import DataTable from "react-data-table-component";
import { FaUsers } from "react-icons/fa6";
import {RiDeleteBin6Line} from "react-icons/ri"

const AllUsers = () => {
    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get("/api/v1/all-users")
            return res.data
        }
    })

    const handleDeleteUser=(_id)=>{
        console.log(_id);
        axiosSecure.delete(`/api/v1/${_id}/deleteUser`)
        .then(res=>{
            console.log(res.data);
            refetch()
        })
    }

    const handleMakeAdmin=(_id)=>{
        console.log(_id);
        axiosSecure.patch(`/api/v1/create-admin/${_id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                alert("update done")
                refetch()
            }
        })
    }

    const columns=[
        {
            name:"No",
            selector:(row,index)=>index+1
        },
        {
            name:"Name",
            selector:(row)=>row.name
        },
        {
            name:"Email",
            selector:(row)=>row.email
        },
        {
            name: "Role",
            cell: (row) => {
                return row.role === "admin" ? 'Admin' :
                    (
                        <button onClick={() => handleMakeAdmin(row._id)} className="bg-red-500 px-3 py-1 rounded text-white flex items-center gap-1">
                            <FaUsers className="text-xl" />
                        </button>
                    );
            }
        },
        {
            name:"Action",
            cell: (row) => (
                <button onClick={()=>handleDeleteUser(row._id)}  className="bg-red-500 px-3 py-1 rounded text-white flex items-center gap-1">
                  <RiDeleteBin6Line /> Delete
                </button>
            )
        }
    ]

    return (
        <div className="my-10 p-4" >
            
<div className="flex justify-evenly" >
    <h2>All Users: </h2>
    <h2>Total Users: {users.length}</h2>
</div>

<DataTable className="mt-10"   
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        responsive
        />


        </div>
    );
};

export default AllUsers;