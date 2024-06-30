import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { SignUpPage } from "../pages/SignUpPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { HeadphonesPage } from "../pages/HeadphonesPage";
import { EarpadsPage } from "../pages/EarpadsPage";
import { ErrorPage } from "../pages/ErrorPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/:id" element={<ProductPage />} />
      <Route path="/headphones" element={<HeadphonesPage />} />
      <Route path="/earpads" element={<EarpadsPage />} />
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default RoutesMain;
