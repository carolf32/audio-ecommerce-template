import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { SignUpPage } from "../pages/SignUpPage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPageFeat } from "../pages/ProductPageFeat";
import { ProductPage } from "../pages/ProductPage";
import { HeadphonesPage } from "../pages/HeadphonesPage";
import { EarpadsPage } from "../pages/EarpadsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { AcessoriesPage } from "../pages/AcessoriesPage";
import { AllProductsPage } from "../pages/AllProductsPage";
import { SearchPage } from "../pages/SearchPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/products/:id/features" element={<ProductPageFeat />} />
      <Route path="/headphones" element={<HeadphonesPage />} />
      <Route path="/earpads" element={<EarpadsPage />} />
      <Route path="/acessories" element={<AcessoriesPage />} />
      <Route path="/products" element={<AllProductsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesMain;
