import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        element:<AddEquipment></AddEquipment>
    },
    {
        path:'/myequipment',
        element:<MyEquipment></MyEquipment>
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