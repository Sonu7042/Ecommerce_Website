import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.jsx";
import Home from '../page/Home.jsx'
import SignUp from "../page/SignUp.jsx";
import Login from "../page/Login.jsx";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>

    </Route>
  )
);




export  default router
