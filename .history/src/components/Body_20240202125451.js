import React, { useEffect } from 'react'
import Browse from './Browse';
import Header from './Header';
import LoginPage from './LoginPage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
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
    //onAuthStateChange is a kind of an event listener, which we want to setup this only once 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // as the User signs in: we do two things:
            //1. dispatch addUser action
            //2. redirect user to 
              const {uid,email,displayName} = user;
              //dispatching the adduser action to the store with this payload object
              dispatch(addUser({uid:uid, email:email,displayName:displayName}));
            } else {
              // User is signed out
              //dispatching removeUser() action to store upon signing out of the user
               dispatch(removeUser());
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