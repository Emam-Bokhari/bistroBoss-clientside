import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()



    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-[50vh]" ><span className="loading loading-spinner loading-lg text-primary"></span></div>
    }
    if (user && isAdmin) {
        return children
    }

    return <Navigate to="/" />
};

export default AdminRoute;