import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    const location= useLocation();
    if(loader){
        return <span className="loading loading-bars loading-lg"></span>
     }
     if(user && user.email){
         return children;
     }
    return (
        <div>
           <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;