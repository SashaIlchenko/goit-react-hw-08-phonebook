
import { Navigation } from "components/Navigation/Navigation"
import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
import { selectIsLoggedIn } from "Redux/auth/Selectors"
import { useSelector } from "react-redux"

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return <header><Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}</header>
}