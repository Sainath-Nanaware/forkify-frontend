// src/routes/ProtectedRoute.js
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const user = useSelector(state => state.auth);
  console.log("user Role",user.userRole);

  // if (!user){
  //   return <Navigate to="/login" />;
  // }

  return allowedRoles.includes(user.userRole)
    ? <Outlet />
    : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
