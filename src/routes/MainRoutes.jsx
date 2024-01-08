import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { SnackbarProvider } from 'notistack';
const ErrorPage = lazy(() => import("../views/Error"));
const LoginPage = lazy(() => import("../views/Login"));
const HomePages = lazy(() => import("../views/Home"));
const SignupPage = lazy(() => import("../views/Register"));
const ProductList = lazy(() => import("../views/ProductList"));
const Orders = lazy(()=> import("../views/Orders"));
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
          <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path="/" element={<HomePages />} />
              <Route path="/login" element={<LoginPage />} />            
              <Route path="/logout" element={<LoginPage />} />
              <Route path="/register" element={<SignupPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/productDetail" element={<ProductDetail />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
          </SnackbarProvider>
        </Router>
      )}
    </div>
  );
};
export default MainRoutes;
