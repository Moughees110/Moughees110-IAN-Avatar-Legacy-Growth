
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
