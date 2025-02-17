import React from 'react'
import GoogleLogo from './imageused/GoogleLogo.png'
import Facebooklogo from './imageused/FacebookLogo.png'
import githubimgae from './imageused/githubimgae.png'
import Applelogin from './imageused/Applelogin.png'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { auth, db } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';

function SignInwithgoogle() {
    const navigate = useNavigate();

    async function googleLogin() {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            if (result.user) {
                const user = result.user;
                toast.success("User logged in Successfully", { position: "top-center" });
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: user.displayName,

                });
                navigate('/Home');
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            toast.error("Login failed. Please try again.", { position: "top-center" });
        }
    }
    async function githublogin() {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            if (result.user) {
                const user = result.user;
                toast.success("User logged in Successfully", { position: "top-center" });
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: user.displayName,
                });
                navigate('/Home');
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            toast.error("Login failed. Please try again.", { position: "top-center" });
        }
    }

    async function facebooklogin() {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            if (result.user) {
                const user = result.user;
                toast.success("User logged in Successfully", { position: "top-center" });
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: user.displayName,
                });
                navigate('/Home');
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            toast.error("User already exists with different Name", { position: "top-center" });
        }
    }

    return (
        <div>
            <p className="font-medium text-blue-200 m-1 text-center">--Or Continue with--</p>
            <div className='flex justify-center gap-3 mt-4 w-full'>
                <img className='cursor-pointer hover:bg-gray-200 rounded-3xl p-1 '
                    src={GoogleLogo} width='30px'
                    onClick={googleLogin}
                    alt="Google Login"
                />
                <img src={Facebooklogo}
                    className='cursor-pointer  hover:bg-gray-200 rounded-3xl p-1'
                    onClick={facebooklogin} width='30px' alt="Facebook Login" />
                <img src={githubimgae}
                    className='cursor-pointer  hover:bg-gray-200 rounded-3xl p-1'
                    width='30px'
                    onClick={githublogin} />
                <img src={Applelogin}
                    className='cursor-pointer  hover:bg-gray-200 rounded-3xl p-1'
                    width='30px' />
            </div>
        </div>
    )
}

export default SignInwithgoogle;
