import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

const ManageUser = () => {
  const axios = useAxios();

  const getUserData = async () => {
    const { data } = await axios.get("/users");
    return data;
  };

  const { data: getUserInfo, refetch } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: getUserData,
  });

  // Change user's Role
  const changeUserRole = async (id, currentRole) => {
    const newRole = currentRole === "member" ? "moderator" : "member";
    try {
      const { data } = await axios.patch(`/users/${id}`, { role: newRole });
      toast.success(`User role updated to ${newRole}`);
      refetch();
    } catch (error) {
      toast.error("Failed to update role");
      console.error("Error updating role:", error);
    }
  };

  // Delete a user's
  const hangleDeleteUser = async (id) => {
    const { data } = await axios.delete(`/users/${id}`);
    toast.success("Delete this user");
    refetch();
  };

  return (
    <div>
      <Helmet>
        <title>devspotlight || Manage User's</title>
      </Helmet>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-josefin font-semibold text-center">
          Manage All User's
        </h2>
      </div>
      <div className="px-3 md:px-10">
        <table className="table w-full">
          <thead className="w-full text-white bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-center">
            <tr className="text-lg font-pt">
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="w-full items-center font-semibold text-center bg-[#f6f2f2]">
            {getUserInfo?.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={item?.photo}
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                </td>
                <td className="px-4 py-2">{item?.name}</td>
                <td className="px-4 py-2">{item?.email}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      changeUserRole(item?._id, item?.role, "Moderator")
                    }
                    className="bg-gray-300 w-2/3 text-black font-semibold rounded px-4 py-1"
                  >
                    {item?.role}
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => hangleDeleteUser(item?._id)}
                    disabled={item?.role === "admin"}
                    className={`rounded px-4 py-1 ${
                      item?.role === "admin"
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-user-x"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="17" x2="22" y1="8" y2="13" />
                      <line x1="22" x2="17" y1="8" y2="13" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
