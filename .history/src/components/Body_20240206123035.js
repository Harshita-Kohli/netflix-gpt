import React from 'react'
import Browse from './Browse';
import Header from './Header';
import LoginPage from './LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Body = () => {
    const appRouter = createBrowserRouter([{
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/browse",
        element: <Browse />
    },
    {
        path: "/login",
        element: <LoginPage />
    }]);

    return (

        <div>
            <RouterProvider router={appRouter}>
                <Header />
                <LoginPage />
                <Browse />
            </RouterProvider>
        </div>
    )
}

export default Body;