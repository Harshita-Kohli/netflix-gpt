import React, { useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const LoginPage = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); //initial state is IsSignInForm = true
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);//toggle the isSignInForm wali state
    }

    cosnt email =useRef()
//validate the form data
    const handleButtonClick = ()=>{
        //we will be using reference of the input boxes of this form using useRef hook. The reference is created by react 
        checkValidData();
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" className='opacity-90'></img>
            </div>
            <form className="w-3/12 bg-black/80 absolute p-12 my-36 mx-auto left-0 right-0 bg-opacity-60 rounded-md">
                <h1 className="text-white font-semibold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input type="name" placeholder="Your Name" class="p-2 mx-auto my-2 rounded-md w-full bg-gray-800" />}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-2 mx-auto my-2 rounded-md w-full bg-gray-800"
                />
                <input
                    type="password"
                    placeholder="Password"
                    class="p-2 mx-auto my-2 rounded-md w-full bg-gray-800"
                />
                {!isSignInForm &&
                    <input
                        type="password" placeholder="Confirm Password" class="p-2 mx-auto my-2 rounded-md w-full bg-gray-800" />}
                        <button className="p-2 m-4 mx-auto bg-red-700 left-0 right-0 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                {isSignInForm ? <p className="text-gray-500 p-2 m-4">New to NetFlix?<span onClick={toggleSignIn} className="text-white p-2 cursor-pointer hover:underline">Sign Up Now</span></p> :
                    <p className="text-gray-500 p-2 m-4">Already a member?<span onClick={toggleSignIn} className="text-white p-2 cursor-pointer hover:underline">Sign In</span></p>}
            </form>
        </div >
    )
}

export default LoginPage;
