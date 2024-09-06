import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layout, Shop, ProductDetails, CartPage,LoginRegisterPage } from "./router";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />

          <Route
            path="/product-details/:productid"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />

          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />

          <Route
            path="/login-register"
            element={
              <Layout>
                <LoginRegisterPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
