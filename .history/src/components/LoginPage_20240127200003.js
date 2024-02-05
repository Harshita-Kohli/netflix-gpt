import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkSignUpData, checkValidData } from '../utils/validate';

const LoginPage = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); //initial state is IsSignInForm = true
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);//toggle the isSignInForm wali state
    }
    const [errorMessage, setErrorMessage] = useState('');

    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const name = useRef(null);

    //validate the form data
    const handleButtonClick = () => {
        //we will be using reference of the input boxes of this form using useRef hook. The reference is created by react 
        // console.log(confirmPassword.current.value);
        // console.log(name.current.value);
        let signInMessage = null;
        const signUpMessage = null;

        const signInMessage = (checkValidData(email.current.value, password.current.value));
        setErrorMessage(message);

        
        if (!isSignInForm) {
            const message = checkSignUpData(password.current.value, confirmPassword.current.value, name.current.value);
            setErrorMessage(message);
            if(message === )
        }

        if(message === null){
            //sign up and sign in logic:

        }
    }

    // const handleSignUpClick = ()=>{
    //     const message = (checkValidData(email.current.value, password.current.value, ));
    //     setErrorMessage(message);
    // }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="logo" className='opacity-90'></img>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-3/12 bg-black/80 absolute p-12 my-36 mx-auto left-0 right-0 bg-opacity-60 rounded-md text-white">
                <h1 className="text-white font-semibold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input ref={name} type="name" placeholder="Your Name" className="p-2 mx-auto my-2 rounded-md w-full bg-gray-800" />}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email Address"
                    className="p-2 mx-auto my-2 rounded-md w-full bg-gray-800"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 mx-auto my-2 rounded-md w-full bg-gray-800"
                />
                {!isSignInForm &&
                    <input
                        ref={confirmPassword}
                        type="password" placeholder="Confirm Password" className="p-2 mx-auto my-2 rounded-md w-full bg-gray-800" />}
                <p className='text-red-500 font-bold px-2 text-lg'>{errorMessage}</p>
                <button className="p-2 m-4 mx-auto bg-red-700 left-0 right-0 w-full rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                {isSignInForm ? <p className="text-gray-500 p-2 m-4">New to NetFlix?<span onClick={toggleSignIn} className="text-white p-2 cursor-pointer hover:underline">Sign Up Now</span></p> :
                    <p className="text-gray-500 p-2 m-4">Already a member?<span onClick={toggleSignIn} className="text-white p-2 cursor-pointer hover:underline">Sign In</span></p>}
            </form>
        </div >
    )
}

export default LoginPage;
