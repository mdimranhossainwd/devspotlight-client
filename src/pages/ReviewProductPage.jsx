import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ReviewProductPage = () => {
  const axios = useAxios();
  const [postData, setPostData] = useState({});
  const getData = async () => {
    const { data } = await axios.get("/review-products");
    return data;
  };

  const { data: getProduct, refetch } = useQuery({
    queryKey: ["getProduct"],
    queryFn: getData,
  });
  console.log(getProduct);

  // Only Moderator user's product data showing in UI
  const handleReviewProduct = async (id) => {
    // Find the specific product using the id
    const selectedProduct = getProduct.find((product) => product._id === id);
    const { name, img, descriptions, tags, timestamp } = selectedProduct || {};

    // Making to Features Keys
    const product_name = name;
    const product_img = img;
    const product_description = descriptions;
    const product_tags = tags;
    const product_totalcount = 11;
    const postReviewData = {
      product_name,
      product_img,
      product_description,
      product_tags,
      timestamp,
      product_totalcount,
    };
    console.log(postReviewData);

    try {
      const { data } = await axios.post(
        `/review-products/${id}`,
        postReviewData
      );
      toast.success("Added this product to Home");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-12">
      <div className="">
        <h2 className="text-4xl font-josefin font-semibold text-center">
          Review's to Products
        </h2>
      </div>
      <div>
        <div className="px-10 mt-10">
          <table className="table w-full">
            {/* head */}
            <thead className="w-full text-white bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-center">
              <tr className="text-lg font-pt">
                <th>Name</th>
                <th>Details</th>
                <th>Status</th>
                <th>Make</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full  items-center text-center bg-[#f6f2f2]">
              {getProduct?.map((item) => (
                <tr key={item._id}>
                  <td className="font-medium text-[16px]">{item.name}</td>
                  <td className="font-medium text-center">
                    <NavLink to={`/dashboard/details/${item._id}`}>
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
                  </td>
                  <td className="text-md font-semibold"> {item.status}</td>
                  <th>
                    <button onClick={() => handleReviewProduct(item?._id)}>
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
                        className="lucide lucide-plus"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </th>
                  <th>
                    <NavLink>
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
                          className="lucide lucide-check"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </button>
                    </NavLink>
                  </th>
                  <th>
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
                        className="lucide lucide-ban"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m4.9 4.9 14.2 14.2" />
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

export default ReviewProductPage;
