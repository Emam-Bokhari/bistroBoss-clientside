import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const NavBar = () => {
const [cart]=useCart()
console.log(cart);
const {logout,user}=useContext(AuthContext)

   

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <button>
            <div className="badge badge-secondary"><FaShoppingCart className="text-lg mr-2" />+{cart.length}</div>
        </button>
        <li><Link to="/dashboard" >Dashboard</Link></li>

    </>

    const handleLogout=()=>{
        logout()
        .then(res=>{
            console.log(res);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                   {user? 
                        <button onClick={handleLogout} className="bg-gray-300 px-3 py-1 rounded text-black font-bold text-lg" >Logout</button>
                    
                    :
                      <Link to="/login" >
                        <button className="bg-gray-300 px-3 py-1 rounded text-black font-bold text-lg" >Login</button>
                    </Link>}
                </div>
            </div>
        </>
    );
};

export default NavBar;