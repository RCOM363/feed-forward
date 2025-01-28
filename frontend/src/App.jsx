import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DonationComplete from "./pages/DonationComplete";

function App() {
  return (
    <>
      <Toaster />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
