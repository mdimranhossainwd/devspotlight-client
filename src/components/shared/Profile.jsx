import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import PaymentModal from "./PaymentModal";

const Profile = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(10);

  return (
    <div className=" min-h-screen p-6 flex justify-center">
      <Helmet>
        <title>DevSpotLight || My-Profile</title>
      </Helmet>
      <div className="bg-white shadow-md rounded-lg max-w-4xl w-full">
        {/* Header */}
        <div
          className="relative h-40 bg-cover bg-center rounded-t-lg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-t-lg"></div>
          <div className="absolute left-6 bottom-6 flex items-center">
            <img
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
              src={user?.photoURL}
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-white text-xl font-bold">
                {user?.displayName}
              </h2>
              <p className="text-gray-200">@ Syftet Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} amount={amount} />
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 font-semibold">Personal Meeting ID</p>
              <p className="text-gray-500">231-342-3245</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-500">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Subscription Type</p>

              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="bg-gradient-to-r font-semibold from-[#7ed56f] to-[#28b485] my-4 text-white px-6 py-3 rounded-md  transition duration-300"
              >
                Subscribe for $ {amount}
              </button>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Time Zone</p>
              <p className="text-gray-500">(GMT+6) Asia/Dhaka</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Language</p>
              <p className="text-gray-500">English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
