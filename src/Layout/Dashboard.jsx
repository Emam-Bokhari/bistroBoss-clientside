import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div>


            <div className="flex min-h-screen gap-10" >

                {/* sidebar */}
                <div className="bg-orange-400" >
                    <Sidebar />
                </div>


                {/* outlet */}
                <div className="bg-[#F6F6F6] flex-1" >
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;