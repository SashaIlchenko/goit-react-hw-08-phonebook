import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/auth/Selectors';
import { useSelector } from 'react-redux';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};