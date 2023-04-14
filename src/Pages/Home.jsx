import { Wrapper, MainTitle, MainImg } from "./Home.styled";
import phonebook from '../Phonebook.jpg'
const HomePage = () => {

    return <Wrapper >
        <MainTitle>Welcome to your phonebook!</MainTitle>
        <MainImg src={phonebook} alt='phonebook' width={350} />
    </Wrapper >


}


export default HomePage;