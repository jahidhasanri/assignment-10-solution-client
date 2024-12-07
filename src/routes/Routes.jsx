import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import Error from "../pages/Error";
import ViewDetails from "../pages/ViewDetails";
import Update from "../pages/Update";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement:<Error></Error>
    },
    {
        path:'/allequipment',
        element:<AllEquipment></AllEquipment>,
        loader: ()=> fetch('https://assignment-10-solution-server.vercel.app/equepments')
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
    },
    {
        path:'viewdetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-solution-server.vercel.app/equepment/${params.id}`)
        
    },
    {
        path:'update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://assignment-10-solution-server.vercel.app/equepment/${params.id}`)
    }

])
export default routes