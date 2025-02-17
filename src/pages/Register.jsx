import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { IoEyeSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import Lottie from 'react-lottie'; // Import Lottie
import Header from '../components/Header';
import Footer from '../components/Footer';
import animation from '../assets/lotti/Animation - 1736227818474.json'; // Lottie animation file

const Register = () => {
  const { handelRegistWemail, setUser, handelLoginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Email and password validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.'
      );
      return;
    }

    handelRegistWemail(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photo,
            });
            toast.success('Registration successful!');
            setTimeout(() => {
              navigate('/');
            }, 1000);
          })
          .catch((error) => {
            console.error(error);
            toast.error(`Failed to update profile: ${error.message}`);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Registration failed: ${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    handelLoginWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success('Login with Google successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(`Google login failed: ${error.message}`);
      });
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Header />
      <div className="hero bg-base-200 min-h-screen mt-20">
        <div className="hero-content flex-col lg:flex-row gap-10 items-center">
          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Lottie options={lottieOptions} height={300} width={300} />
          </div>
          {/* Registration Form */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[50px] right-3 text-xl"
                >
                  {showPassword ? <HiMiniEyeSlash /> : <IoEyeSharp />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Have an account? Please{' '}
                <Link to="/login" className="text-red-500 border-b-2">
                  Login
                </Link>
              </p>
            </form>
            <div className="form-control mt-4 w-8/12 mx-auto mb-10">
              <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary flex items-center gap-2">
                <FcGoogle size={24} />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
