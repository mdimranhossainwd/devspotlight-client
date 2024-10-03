import { NavLink } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const MyProductPage = () => {
  const [product, refetch] = useProduct();
  console.log(product);

  return (
    <div className="my-12">
      <div>
        <h2 className="text-4xl font-josefin font-semibold text-center">
          Here's My All Products
        </h2>
      </div>
      <div>
        <div className="px-10">
          <table className="table w-full">
            {/* head */}
            <thead className="w-full text-white bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-center rounded-lg">
              <tr className="text-lg font-pt">
                <th>Name</th>
                <th>Vote</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full text-center bg-gray-100">
              {product?.map((item) => (
                <tr key={item._id}>
                  <td className="font-medium text-[16px]">{item.name}</td>
                  <td className="font-medium">11</td>
                  <td className="text-md font-semibold"> {item.status}</td>
                  {/* <td className="text-md font-semibold">{item.agent}</td>
                  <td className="text-md font-semibold"> {item.location}</td> */}
                  <th>
                    <NavLink to={`/dashboard/update/${item?._id}`}>
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
                          className="lucide lucide-pencil"
                        >
                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </button>
                    </NavLink>
                  </th>
                  <th>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0H5"
                        />
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

export default MyProductPage;
