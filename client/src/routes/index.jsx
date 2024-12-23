import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../page/Home.jsx";
import SignUp from "../page/SignUp.jsx";
import Login from "../page/Login.jsx";
import AdminPanel from "../page/AdminPanel.jsx";
import Allusers from "../page/Allusers.jsx";
import AllProducts from "../page/AllProducts.jsx";
import ProductDetails from "../page/ProductDetails.jsx";
import Cart from "../page/Cart.jsx";
import CategoryProduct from "../page/CategoryProduct.jsx";
import SearchProduct from "../page/SearchProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />

      <Route path="adminpanel" element={<AdminPanel />}>
        <Route path="allUsers" element={<Allusers />} />
        <Route path="allProducts" element={<AllProducts />} />
      </Route>

      <Route path="cart" element={<Cart/>}/>
      <Route path="product/:id"  element={<ProductDetails/>}/>
      <Route path="product-category" element={<CategoryProduct/>}/>
      <Route path="search" element={<SearchProduct/>}/>
      

    </Route>
  )
);

export default router;
