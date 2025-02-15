import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import DonationComplete from "./Pages/DonationComplete";

function App() {
  return (
    <>
      <Toaster />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                allowedRoles={["Admin", "CityAdmin", "Donor", "Recipient"]}
              >
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donation-complete/:donationId"
            element={
              <ProtectedRoute allowedRoles={["Recipient"]}>
                <DonationComplete />
              </ProtectedRoute>
            }
          />
          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="w-screen h-screen flex justify-center items-center">
                <h1 className="text-3xl font-bold">404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
