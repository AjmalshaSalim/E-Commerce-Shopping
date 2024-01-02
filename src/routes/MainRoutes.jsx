import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";
const LoginPage = lazy(() => import("../views/Login"));
const HomePages = lazy(() => import("../views/Home"));
const SignupPage = lazy(() => import("../views/Register"));
const ProductList = lazy(() => import("../views/ProductList"));
const ShopPage = lazy(() => import("../views/Shop"));
const Cart = lazy(() => import("../views/Cart"));
const Wishlist = lazy(() => import("../views/Wishlist"));
const AboutUs = lazy(() => import("../views/AboutUs"));
const ProductDetail = lazy(() => import("../views/ProductDetail"));
const MainRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1650);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path="/" element={<HomePages />} />
              <Route path="/login" element={<LoginPage />} />            
              <Route path="/logout" element={<LoginPage />} />
              <Route path="/register" element={<SignupPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/productDetail" element={<ProductDetail />} />
              <Route path="/shop" element={<ShopPage />} />
            </Routes>
          </Suspense>
        </Router>
      )}
    </div>
  );
};
export default MainRoutes;
