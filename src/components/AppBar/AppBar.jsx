// import { NavLink } from "react-router-dom";
import { AuthNav } from "components/AuthNav/AuthNav"
import { UserMenu } from "components/UserMenu/UserMenu"
export const AppBar = () => {
    return <header><nav>Home</nav>
        <AuthNav /><UserMenu /></header>
}