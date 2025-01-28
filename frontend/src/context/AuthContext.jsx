import { createContext, useContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import { loginUser, fetchUserProfile, logoutUser } from "../api/users";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      toast.success("login successful");
      console.log(data);
      const res = await userProfile.refetch();
      setUser(res.data);
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const userProfile = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const response = await fetchUserProfile();
      return response;
    },
    enabled: false,
  });

  const { mutate: logout } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      toast.success("Logout successful");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, isLoginPending, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
