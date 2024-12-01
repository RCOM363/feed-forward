import React from 'react'
import { useQuery,useMutation } from '@tanstack/react-query';
import axiosInstance from '../utils/axiosInstance';
import AdminDashboard from "../components/AdminDashboard"
import CityAdminDashboard from "../components/CityAdminDashboard";
import DonorDashboard from "../components/DonorDashboard";
import RecipientDashboard from "../components/RecipientDashboard";
import UserProfile from '../components/dashboardComponents/UserProfile';

const fetchUserProfile = async () => {
    const response = await axiosInstance.get('/users/get-user-profile');
    return response.data.data;
}

function Dashboard() {

    const { data:user,isLoading, isError, error } = useQuery({
        queryKey:["userProfile"],
        queryFn: fetchUserProfile,
        enabled:true,
    });

    if (isLoading) return <p>Loading profile...</p>;
    if (isError) return <p>Error: {error.message}</p>;


  return (
    <div>
        <UserProfile user={user}/>
        {user?.role === "Admin" && <AdminDashboard />}
        {user?.role === "CityAdmin" && <CityAdminDashboard />}
        {user?.role === "Donor" && <DonorDashboard />}
        {user?.role === "Recipient" && <RecipientDashboard />}
    </div>
  )
}

export default Dashboard