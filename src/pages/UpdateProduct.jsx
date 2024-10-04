import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useProduct from "../hooks/useProduct";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product] = useProduct();
  const [singleProduct, setSingleProduct] = useState({});
  const axios = useAxios();
  const navigate = useNavigate();

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

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const descriptions = form.descriptions.value;
    const email = form.email.value;
    const ownerName = form.ownerName.value;
    const link = form.link.value;
    const tags = form.tags.value;
    const updateFormData = {
      name,
      img,
      descriptions,
      email,
      ownerName,
      link,
      tags,
    };
    console.log(updateFormData);

    try {
      const { data } = await axios.patch(
        `/add-products/${_id}`,
        updateFormData
      );
      console.log(data);
      toast.success("Product update successfully");
      navigate("/dashboard/my-product");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Helmet>
        <title>devspotlight || Update-Product </title>
      </Helmet>
      <div className="max-w-3xl mx-auto my-6 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-josefin text-center font-bold mb-6">
          Update Product
        </h2>
        <form onSubmit={handleUpdateProduct} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              placeholder="Product Name here ...."
              id="name"
              name="name"
              defaultValue={name}
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
              name="img"
              defaultValue={img}
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
              defaultValue={descriptions}
              name="descriptions"
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
                defaultValue={ownerName}
                name="ownerName"
                disabled
                className=" w-full px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                id="email"
                disabled
                name="email"
                defaultValue={email}
                className=" w-full px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <img
                alt="Owner"
                defaultValue={photo}
                id="ownerImg"
                name="ownerImg"
                className="w-16 h-16 object-cover rounded-full border border-gray-300"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">
              Tags
            </label>

            <input
              name="tags"
              defaultValue={tags}
              placeholder="Enter Tags"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
            />
          </div>

          {/* External Links */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              External Links
            </label>
            <input
              type="text"
              name="link"
              id="link"
              defaultValue={link}
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
