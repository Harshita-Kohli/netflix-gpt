import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase   ";
const Header = () => {

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between'>
            < img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className='w-36 h-50' ></img >
            <div className='flex p-2'><img src="" alt="userIcon" className='flex p-2' />
                <button  className='font-bold text-white' onClick = {handleSignOut}>(Sign Out)</button></div>
        </div>

    )
}

export default Header;