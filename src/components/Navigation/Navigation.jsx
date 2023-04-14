
import { Link } from 'components/AuthNav/AuthNav.styled';
import { selectIsLoggedIn } from 'Redux/auth/Selectors';
import { useSelector } from 'react-redux';
import { NavBar } from './Navigation.styled';
export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <NavBar >
            <Link to="/">
                Home
            </Link>
            {isLoggedIn && (
                <Link to="/contacts">
                    Contacts
                </Link>
            )}
        </NavBar >
    );
}