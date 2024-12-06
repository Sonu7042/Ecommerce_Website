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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} /> {/* Use 'index' for the default child route */}
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />

      <Route path="adminpanel" element={<AdminPanel />}>
        <Route path="allUsers" element={<Allusers />} /> {/* Relative path */}
        <Route path="allProducts" element={<AllProducts />} /> {/* Relative path */}
      </Route>
    </Route>
  )
);


export default router;
