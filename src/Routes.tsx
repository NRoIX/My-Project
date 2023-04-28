import { FC, useContext,useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "./route";
import { ToastContainer } from "react-toastify";
import { App } from "./App";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Aboutus, Cart, Dashboard, Home, Login, ProductForm } from "./pages/";
import { AuthContext, WishlistContextProvider } from "./provider";
import { CartProvider } from "react-use-cart";
import "aos/dist/aos.css";
import * as Aos from "aos";

export const Routes: FC = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  useEffect(() => {
    Aos.init();
  }, []);
  

  const content = (
    <>
      <Nav />

      <Switch>
        <Route path="/home" exact component={Home}></Route>

        <Route path={routes.auth} exact>
          <Login />
        </Route>

        <Route exact path={routes.dashboard}>
          <Dashboard />
        </Route>

        <Route path="/aboutus" exact component={Aboutus} />

        <Route exact path={[routes.createProduct, routes.updateProduct]}>
          <ProductForm />
        </Route>

        <Route exact path={routes.Products}>
          <App />
        </Route>

        <Route path="/cart" exact component={Cart} />

        {!isAuthenticated && <Redirect to={routes.auth} />}
      </Switch>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );

  return (
    <div>
      {user ? (
        <CartProvider id={user.id}>
          <WishlistContextProvider userId={user.id}>
            {content}
          </WishlistContextProvider>
        </CartProvider>
      ) : (
        content
      )}
    </div>
  );
};
