import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import { loginUser, fetchUserProfile, logoutUser } from "../api/users";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (location.pathname === "/dashboard") {
          setIsLoading(true);
          const res = await userProfile.refetch();
          setUser(res.data);
          setIsLoading(false);
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

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
      value={{ user, setUser, login, isLoginPending, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
