import React, { useEffect } from 'react'
import Browse from './Browse';
import Header from './Header';
import LoginPage from './LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch();
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
    //using the onAuthStateChange api only once 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              //dispatching the adduser action to the 
              dispatch(addUser({uid:uid, email:email,displayName:displayName}));
            } else {
              // User is signed out
               
            }
          });
          
    }, []);
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