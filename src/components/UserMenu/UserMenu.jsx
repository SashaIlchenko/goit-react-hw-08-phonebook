import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "Redux/auth/Selectors";
import { logOut } from "Redux/auth/Operations";
import { Wrapper, Text, LogOutBtn } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    return (<Wrapper><Text>Welcome {user.name}! </Text><LogOutBtn type='button'
        onClick={() => dispatch(logOut())}>Log out</LogOutBtn></Wrapper>)
}