import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchRecipientFoodRequests } from "../../api/foodRequest";
import { fetchFoodPosts } from "../../api/foodPosts";
import FoodRequest from "./FoodRequest";
import FoodPost from "./FoodPost";

const RecipientDashboard = () => {
  const [currentFoodRequestsPage, setCurrentFoodRequestsPage] = useState(1);
  const [currentFoodPostsPage, setCurrentFoodPostsPage] = useState(1);

  const { data: requests, isLoading: areRequestsLoading } = useQuery({
    queryKey: ["recipientFoodRequests", currentFoodRequestsPage],
    queryFn: () => fetchRecipientFoodRequests(currentFoodRequestsPage, 2),
    enabled: true,
  });

  const { data: posts, isLoading: arePostsLoading } = useQuery({
    queryKey: ["foodPosts", currentFoodPostsPage],
    queryFn: () => fetchFoodPosts(currentFoodPostsPage, 2),
    enabled: true,
    refetchInterval: 5 * 60 * 1000, // refetch every 10 minutes
  });

  return (
    <div className="bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12"></h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Your Food Requests
            </h2>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <FoodRequest
                requests={requests}
                isLoading={areRequestsLoading}
                currentPage={currentFoodRequestsPage}
                setCurrentPage={setCurrentFoodRequestsPage}
                userRole="Recipient"
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">
              Available Food Posts
            </h2>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <FoodPost
                posts={posts}
                isLoading={arePostsLoading}
                currentPage={currentFoodPostsPage}
                setCurrentPage={setCurrentFoodPostsPage}
                userRole="Recipient"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientDashboard;
