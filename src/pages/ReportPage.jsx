import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ReportPage = ({ type }) => {
  const axios = useAxios();
  const getReport = async () => {
    const { data } = await axios.get("/report");
    return data;
  };

  const { data: getReportData, refetch } = useQuery({
    queryKey: ["getReportData"],
    queryFn: getReport,
  });

  const reportDeleteProduct = async (id) => {
    const { data } = await axios.delete(`/report/${id}`);
    toast.success("Report Product Deleted Successfully");
    refetch();
    console.log(data);
  };

  return (
    <div>
      <div className="my-12">
        <h2 className="text-3xl font-josefin font-semibold text-center">
          Here's All Reported Products
        </h2>
      </div>
      <div>
        <div className="px-3 md:px-10 mt-10">
          <table className="table w-full">
            {/* head */}
            <thead className="w-full text-white bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-center">
              <tr className="text-lg font-pt">
                <th>Name</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full items-center text-center bg-[#f6f2f2]">
              {getReportData?.map((item) => (
                <tr key={item._id}>
                  <td className="font-medium text-[16px]">
                    {item.product_name}
                  </td>
                  <th>
                    <NavLink to={`/${item?.type}/${item._id}`}>
                      <button>
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
                          className="lucide lucide-eye"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </NavLink>
                  </th>
                  <th>
                    <button onClick={() => reportDeleteProduct(item._id)}>
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
                        className="lucide lucide-trash-2"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
