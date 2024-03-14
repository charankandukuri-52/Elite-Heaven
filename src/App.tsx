import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import LandingPage from "./Pages/LandingPage";
import Profile from "./Pages/Profile";
import { AuthContextProvider } from "./Auth/AuthContext";
import ProfileAuth from "./Auth/ProfileAuthentication";
function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route
                path="/profile"
                element={
                  <ProfileAuth>
                    {" "}
                    <Profile />{" "}
                  </ProfileAuth>
                }
              />
              <Route path="/reset-password" element={<ForgotPassword />} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
