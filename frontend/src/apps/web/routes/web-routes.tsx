import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/web-layout";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "@/apps/auth/pages/Login";
import SignUp from "@/apps/auth/pages/sign-up";

const WebRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default WebRoutes;
