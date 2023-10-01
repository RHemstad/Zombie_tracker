import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        //auth?.user
        //comparing values of two arrays (roles stored in authstate and allowedRoles)
        //trying to match up values
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />
        : auth?.user 
        //what if user doesn't have a role?
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        //what if user isn't logged in?
        : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;