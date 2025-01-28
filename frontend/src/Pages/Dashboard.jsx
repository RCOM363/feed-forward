import React from "react";

import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import UserProfile from "../components/dashboardComponents/UserProfile";
import DashboardStats from "../components/dashboardComponents/DashboardStats";
import AdminDashboard from "../components/dashboardComponents/AdminDashboard";
import CityAdminDashboard from "../components/dashboardComponents/CityAdminDashboard";
import DonorDashboard from "../components/dashboardComponents/DonorDashboard";
import RecipientDashboard from "../components/dashboardComponents/RecipientDashboard";

function Dashboard() {
  const { user } = useAuth();

  const roleComponents = {
    Admin: <AdminDashboard />,
    CityAdmin: <CityAdminDashboard />,
    Donor: <DonorDashboard />,
    Recipient: <RecipientDashboard />,
  };

  return (
    <div className="bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 pt-20">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-5 p-5 my-5 rounded-lg  bg-white ">
          <h1 className=" basis-full text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
            {user.role} Dashboard
          </h1>
          <UserProfile user={user} />
          <DashboardStats />
        </div>
        {roleComponents[user?.role] || <p>Unauthorized Access.</p>}
      </main>
    </div>
  );
}

export default Dashboard;
