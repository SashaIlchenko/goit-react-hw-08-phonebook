
import { Link } from 'components/AuthNav/AuthNav.styled';
import { selectIsLoggedIn } from 'Redux/auth/Selectors';
import { useSelector } from 'react-redux';
export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            {isLoggedIn && (
                <Link to="/contacts">
                    Contacts
                </Link>
            )}
        </nav>
    );
}