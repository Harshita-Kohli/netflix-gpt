import React ,{ useEffect }from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    //onAuthStateChange is a kind of an event listener, which we want to setup this only once 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // as the User signs in, dispatch addUser action
                const { uid, email, displayName,photoURL } = user;
                //dispatching the adduser action to the store with this payload object
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
           
            } else {
                // User is signed out, so dispatching removeUser() action to store upon signing out of the user
                dispatch(removeUser());
            }
        });

    }, []);

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between'>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className='w-36 h-50' ></img >
            {user && <div className='flex p-2'><img src={user.photoURL} alt="userIcon" className='flex p-2 w-12 h-12' />
                <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button></div>}
        </div>

    )
}

export default Header;