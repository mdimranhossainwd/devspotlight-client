import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import TopHeading from "../components/shared/TopHeading";
import useAxios from "../hooks/useAxios";

const DashboardProductDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [isData, setIsData] = useState({});
  const getData = async () => {
    const { data } = await axios.get("/review-products");
    return data;
  };
  const { data: getProduct, refetch } = useQuery({
    queryKey: ["getProduct"],
    queryFn: getData,
  });
  useEffect(() => {
    const findData = getProduct?.find((item) => item._id === id);
    setIsData(findData);
  }, [id, getData]);

  const {
    _id,
    name,
    img,
    descriptions,
    email,
    ownerName,
    link,
    tags,
    photo,
    timestamp,
    status,
  } = isData || {};

  return (
    <div className="mt-12">
      <Helmet>
        <title>devspotlight || Dashboard Product Details</title>
      </Helmet>
      <TopHeading
        heading="Product Details"
        text="Explore our top picks for the most innovative and helpful developer tools available today. These tools are designed to streamline workflows, enhance collaboration, and boost productivity, enabling developers to build high-quality software more efficiently and effectively than ever before."
      />

      <div className="md:flex justify-center items-start p-10 min-h-screen">
        <div className="bg-gray-50 shadow-md rounded-lg p-16 md:flex md:space-x-16">
          {/* Product Image Section */}
          <div className="md:w-1/2">
            <img
              src={img} // Replace with your image URL
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Information Section */}
          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">
              {name}
            </h1>
            <p className="text-gray-500 mt-1">
              <span className="font-medium text-black">TotalCount: </span>
              11
            </p>

            {/* Payment Options */}
            <p className="text-md py-4 text-gray-500 mt-2">{descriptions}</p>

            {/* Product Metadata */}
            <p className="text-sm mt-2 text-blue-500 cursor-pointer">
              <span className="font-medium text-black">Tags:</span> {tags}
            </p>

            {/* Add to Cart Button */}
            <div className="flex items-center gap-6">
              <button className="mt-4 w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors">
                Upvoted
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductDetails;
