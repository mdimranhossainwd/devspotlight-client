import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-4xl font-josefin font-bold text-gray-800 mb-3">
          Welcome back
        </h2>
        <p className="text-gray-500 font-semibold mb-6">
          Sign in to access your dashboard, settings, and projects.
        </p>

        <button className="w-full flex items-center justify-center gap-3 text-md bg-gray-700 text-white font-semibold py-3 rounded-md mb-6">
          <FaGoogle />
          <span>Connect with Google</span>
        </button>

        <div className="relative text-gray-400 mb-6">
          <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-white px-2 text-sm">
            or sign in with email
          </span>
          <div className="border-t border-gray-300"></div>
        </div>

        <form>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
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
          <a href="#" className="text-black">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
