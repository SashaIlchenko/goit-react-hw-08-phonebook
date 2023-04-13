// import { fetchContacts } from 'Redux/contacts/Operations';
// import { useDispatch, useSelector } from 'react-redux';
import { lazy } from "react";
import { Layout } from "./Layout";
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { AppBar } from './AppBar/AppBar';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Container } from './App.styled';
// import { selectIsLoading, selectError } from 'Redux/contacts/Selectors';
// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
const HomePage = lazy(() => import('../Pages/Home'));
const LoginPage = lazy(() => import('../Pages/Login'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const PhonebookPage = lazy(() => import('../Pages/Phonebook'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  )
}
