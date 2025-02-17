import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth, db } from './Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInwithgoogle from './LoginwithOther';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Merienda:wght@300..900&family=Poiret+One&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User login Successfully!!", { position: "top-center" });
      navigate('/home');
    } catch (error) {
      toast.error("Incorrect Password", { position: "top-center" });
      setError(error.message);
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, createEmail);
      if (signInMethods.length > 0) {
        throw new Error("This email is already in use. Try logging in.");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, createEmail, createPassword);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: createEmail,
          username: username,
          password: createPassword,
        });
      }
      setIsLogin(true);
      toast.success("User Registered Successfully!!", { position: "top-center" });
    } catch (error) {
      toast.error("Write Proper Email/Password", { position: "top-center" });
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className='flex h-screen'>
      <ToastContainer />
      <div className="w-full hidden md:flex bg-[#050A24] flex-wrap md:w-1/2 md:visible lg:w-1/2 lg:visible">
        <div className='w-4/5 h-3/5 m-auto mr-0 flex relative lg:h-3/5 lg:w-3/5 md:h-auto md:w-3/5'>
          <div className='lg:absolute top-0 left-0 w-full h-full p-4 text-white  md:p-0 md:h-auto '>
            <div className='w-full h-full bg-transparent border border-gray-700 rounded p-2'>
              <div className='relative  lg:p-7 md:p-4 pb-2 z-1'>
                <TypeAnimation
                  sequence={[
                    'Code Sonata',
                    1000,
                    'Made for you',
                    1000,
                    'Code Sonata',
                    1000,
                    'Made for you',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em ', display: 'inline-block' }}
                  className='relative '
                  repeat={Infinity}
                />
              </div>
              <div style={{ fontFamily: "'Merienda', cursive" }} className=' z-1 relative lg:p-6 lg:text-6xl md:p-4 md:text-2xl'>
                {isLogin ? 'Login Page' : 'Register Page'}
              </div>
              <div style={{ fontFamily: "'Poiret One', cursive" }} className='  relative z-1 xl:mb-20 lg:mb-10 md:mb-10 lg:p-4 lg:text-4xl  md:p-4 md:text-2xl'>
                Start your journey now with us
              </div>
            </div>
            <div className='absolute top-0 z-0 right-0 w-1/2 h-full m-auto ml-0 bg-gradient-to-t from-[#050A24] via-[#060D2A] to-[#0F1D5C]  '></div>
            <div className='absolute top-0 z-0 left-0 w-1/2 h-full m-auto mr-0 bg-gradient-to-b from-[#050A24] via-[#060D2A] to-[#0F1D5C] '></div>
          </div>

        </div>
      </div>

      <div className='w-full h-full bg-gray-100 flex items-center justify-start md:w-1/2 lg:w-1/2 '>
        <div className=' w-auto h-auto bg-white m-auto p-10 rounded-lg shadow-lg lg:ml-0 lg:p-4 lg:w-4/5 md:ml-0 md:p-4 md:w-4/5 '>
          {error && <p className='text-red-500'>{error}</p>}
          {isLogin ? (
            <form onSubmit={handleLogin}>
              <div style={{ fontFamily: "'Quicksand', sans-serif" }} className=' text-2xl mb-7 lg:text-4xl lg:mb-14 md:text-2xl md:mb-10 '>Sign In</div>
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="w-full p-2 mb-4 border rounded hover:bg-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="w-full p-2 mb-4 border rounded hover:bg-gray-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <p className="mt-4 text-sm">
                Don't have an account?{' '}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 cursor-pointer"
                >
                  Register
                </span>
              </p>
              <SignInwithgoogle />
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <h2 className='text-3xl font-bold mb-4'>Register</h2>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-4 border rounded hover:bg-gray-100"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="w-full p-2 mb-4 border rounded hover:bg-gray-100"
                value={createEmail}
                onChange={(e) => setCreateEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                className="w-full p-2 mb-4 border rounded hover:bg-gray-100"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
              <p className="mt-4 text-sm">
                Already have an account?{' '}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-green-600 cursor-pointer"
                >
                  Login
                </span>
              </p>
              <SignInwithgoogle />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
