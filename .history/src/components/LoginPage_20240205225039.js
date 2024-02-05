import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkSignUpData, checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const LoginPage = () => {

    const [isSignInForm, setIsSignInForm] = useState(true); //initial state is IsSignInForm = true
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);//toggle the isSignInForm wali state
    }
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    //validate the form data
    const handleButtonClick = () => {
        //we will be using reference of the input boxes of this form using useRef hook. The reference is created by react 
        // console.log(confirmPassword.current.value);
        // console.log(name.current.value);
        let signInMessage = null;
        let signUpMessage = null;

        signInMessage = (checkValidData(email.current.value, password.current.value));
        setErrorMessage(signInMessage);


        if (!isSignInForm) {
            signUpMessage = checkSignUpData(password.current.value, confirmPassword.current.value, name.current.value);
            setErrorMessage(signUpMessage);

            if (signUpMessage === null) { //if everything is valid, proceed to sign up
                //sign up logic:
                console.log("user sign up starts");
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up, so gives user object
                        const user = userCredential.user;
                        //update the userSlice with the current user:
                        updateProfile(auth.user, {
                            displayName: name.current.value, photoURL: ""
                        }).then(() => {
                            //we need to extract the uid,email, name and photoURL from the auth object since it holds the updates value of the user
                            const { uid, email, displayName, photoURL } = auth.user.currentUser;
                            //update our store with name, photoUrl 
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                            //once Profile is updated, redirect user to browse page
                            navigate("/browse");
                        }).catch((error) => {
                            // An error occurred
                            console.log("error occurred in sign up!!")
                            console.log(error);
                            setErrorMessage(error.message);
                        });
                        console.log(user);
                        console.log(getIdToken);
                        user.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                            console.log("id token");
                        }).catch(function (error) {
                            console.log("error occurred " + error);
                        });

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-" + errorMessage);
                    });
            }
        }

        if (signInMessage === null) {
            //sign in logic:
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // redirect user to browse page
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
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
                {errorMessage && <p className='text-red-500 font-bold px-2 text-lg'>{errorMessage}</p>}
                <button className="p-2 m-4 mx-auto bg-red-700 left-0 right-0 w-full rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                {isSignInForm ? <p className="text-gray-500 p-2 m-4">New to NetFlix?<span onClick={toggleSignIn} className="text-white p-2 cursor-pointer hover:underline">Sign Up Now</span></p> :
                    <p className="text-gray-500 p-2 m-4">Already a member?<span onClick={toggleSignIn} className="text-white p-2 cursor-pointer hover:underline">Sign In</span></p>}
            </form>
        </div >
    )
}

export default LoginPage;
