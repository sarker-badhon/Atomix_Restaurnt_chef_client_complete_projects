import React from 'react';
import { AuthContext } from '../Provider/AuthProvider';
// import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    // const location = useLocation()
    // console.log(location);
    if(loading){
        return <h3 className='page-loading'>Loading......</h3>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;