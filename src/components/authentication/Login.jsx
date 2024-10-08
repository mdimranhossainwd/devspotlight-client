import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, signIn } = useAuth();
  const location = useLocation();
  const { register, handleSubmit } = useForm();
  const from = location.state || "/";
  const axios = useAxios();
  // LOGIN WITH FUNCTIONALITY
  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const result = await signIn(email, password);
      console.log(result);
      toast.success("SignIn Successfully");
      const { data } = await axios.post("/jwt", result?.user?.email);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  // GOOGLE LOGIN FUNCTIONS
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      const { data } = await axios.post("/jwt", result?.user?.email);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Helmet>
        <title>devspotlight || Login Page</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-4xl font-josefin font-bold text-gray-800 mb-3">
            Welcome back
          </h2>
          <p className="text-gray-500 font-semibold mb-6">
            Sign in to access your dashboard, settings, and projects.
          </p>

          <button
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-3 text-md border-gray-300 border text-black font-semibold py-3 rounded-md mb-6"
          >
            {/* <FaGoogle /> */}
            <img
              className="w-5 h-5"
              src="https://i.ibb.co.com/xfm5X7r/Google-G-logo-svg-removebg-preview.png"
              alt=""
            />
            <span>Sign In with Google</span>
          </button>

          <div className="relative text-gray-400 mb-6">
            <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white px-2 text-sm">
              or sign in with email
            </span>
            <div className="border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-gray-600 text-md font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f]"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="password"
                className="block text-gray-600 text-md font-semibold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f]"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600 text-sm">
                Remember for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-3 rounded-md "
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 text-md font-semibold text-gray-500">
            No account?{" "}
            <Link to="/signup" className="text-black">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
