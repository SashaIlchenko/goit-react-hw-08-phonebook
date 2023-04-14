
import { Navigation } from "components/Navigation/Navigation"
import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
import { selectIsLoggedIn } from "Redux/auth/Selectors"
import { useSelector } from "react-redux";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return <Header><Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>
}