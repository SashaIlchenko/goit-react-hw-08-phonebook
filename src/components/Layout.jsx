import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './App.styled';

export const Layout = () => {
    return (
        <>
            <AppBar />
            <Container>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
                <Toaster position="top-right" reverseOrder={false} />
            </Container></>
    );
};