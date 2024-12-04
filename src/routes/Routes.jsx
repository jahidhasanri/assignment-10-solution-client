import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/allequipment',
        element:<AllEquipment></AllEquipment>
    },
    {
        path:'/addequipment',
        element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
        
    },
    {
        path:'/myequipment',
        element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'register',
        element:<Register></Register>
    }
])
export default routes