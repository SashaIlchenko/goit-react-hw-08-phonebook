import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "Redux/auth/Selectors"
import { logOut } from "Redux/auth/Operations"

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return (<div><p>Welcome {user.name}! </p><button type='button'
        onClick={() => dispatch(logOut())}>Log out</button></div>)
}