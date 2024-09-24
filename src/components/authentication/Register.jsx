import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-josefin font-bold mb-2 text-center">
          Create Your Account
        </h2>
        <p className="text-gray-600  mb-4 text-center">
          Welcome back! Please enter your details
        </p>

        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 mb-4 gap-3"
        >
          <FaGoogle />
          <span>Sign up with Google</span>
        </button>

        <div className="text-center text-gray-500 mb-4">OR</div>

        <form action="">
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-md font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-md font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-md font-semibold mb-1">
              Photo URL
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Photo URL Link here ...."
            />
          </div>
        </form>

        <div className="mb-4 flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">
            I accept all terms & conditions.
          </label>
        </div>

        <button className="w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-2 px-4 rounded-lg ">
          Sign in
        </button>

        <p className="text-center font-semibold text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-black">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
