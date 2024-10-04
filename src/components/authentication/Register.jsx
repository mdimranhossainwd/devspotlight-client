import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const { signInWithGoogle, user, createUser, setUser, updateUserProfile } =
    useAuth();
  const axios = useAxios();
  // CREATE USER FUNCTIONS
  const handleSignUp = async (data) => {
    const { email, name, password, photo } = data;
    console.log({ email, name, password, photo });

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);
      setUser({ ...result?.user, photoURL: photo, displayName: name });
      await axios.post("/users", {
        email,
        name,
        photo,
        role: "normal",
      });
      navigate(from, { replace: true });
      toast.success("User created Successfully ");
    } catch (err) {
      console.log(err);
    }
  };

  // GOOGLE LOGIN FUNCTIONS
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Helmet>
        <title>devspotlight || Sign Up</title>
      </Helmet>
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
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 px-4 text-black font-semibold rounded-lg hover:bg-gray-50 mb-4 gap-3"
          >
            <img
              className="w-5 h-5"
              src="https://i.ibb.co.com/xfm5X7r/Google-G-logo-svg-removebg-preview.png"
              alt=""
            />
            <span>Sign up with Google</span>
          </button>

          <div className="text-center text-gray-500 mb-4">OR</div>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
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
                id="email"
                {...register("email", { required: true })}
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
                id="password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-md font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                {...register("photo")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Photo URL Link here ...."
              />
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">
                I accept all terms & conditions.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-2 px-4 rounded-lg "
            >
              Sign up
            </button>
          </form>

          <p className="text-center font-semibold text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-black">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
