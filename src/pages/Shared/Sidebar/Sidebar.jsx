import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";

const Sidebar = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="my-10" >
            <nav className="w-[250px]" >
                <ul className="p-4" >
                    {
                        isAdmin ?
                            <>
                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/"  >Admin Home</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/dashboard/addItems" >Add Items</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/dashboard/manageItems"  >Manage Items</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/dashboard/manageBookings" >Manage Bookings</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/dashboard/allUsers"  >All Users</Link></li>
                            </>
                            :
                            <>
                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/"  >User Home</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link >Reservation</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link  >Payment History</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link to="/dashboard/myCart" >My Cart</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link  >Add Review</Link></li>

                                <li className="px-4 py-1 hover:bg-blue-100 rounded cursor-pointer" ><Link>My Booking</Link></li>
                            </>
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;