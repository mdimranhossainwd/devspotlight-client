import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const UpdateProduct = () => {
  const { id } = useParams();

  const [product] = useProduct();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const findProduct = product.find((item) => item._id === id);
    setSingleProduct(findProduct);
  }, [id, product]);

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
  } = singleProduct || {};

  return (
    <div>
      <Helmet>
        <title>devspotlight || Update-Product </title>
      </Helmet>
      <div className="max-w-3xl mx-auto my-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-josefin text-center font-bold mb-6">
          Update Product
        </h2>
        <form className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              placeholder="Product Name here ...."
              id="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="text"
              placeholder="Product Image Link ..."
              id="img"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              type="text"
              placeholder="Product Descriptions ..."
              id="descriptions"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
            />
          </div>

          {/* Owner Info */}
          <div>
            <h3 className="block text-sm font-medium text-gray-700">
              Owner Info
            </h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <input
                id="ownerName"
                disabled
                className=" w-full px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                id="email"
                disabled
                className=" w-full px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <img
                alt="Owner"
                id="ownerImg"
                className="w-16 h-16 object-cover rounded-full border border-gray-300"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">
              Tags
            </label>
            {/* 
          <TagsInput
            name="tags"
            id="tags"
            placeHolder="Enter Tags"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
          /> */}
          </div>

          {/* External Links */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              External Links
            </label>
            <input
              type="text"
              id="link"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
              placeholder="e.g., https://product.com"
            />
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white font-medium rounded-md hover:"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
