import { useLoaderData } from "react-router-dom";
import TopHeading from "../components/shared/TopHeading";

const ProductPage = () => {
  const productInfo = useLoaderData();
  const {
    _id,
    product_name,
    product_img,
    product_tags,
    product_description,
    product_totalcount,
    product_links,
  } = productInfo || {};

  return (
    <div className="container mx-auto py-12">
      <TopHeading
        heading="Product Details"
        text="Explore our top picks for the most innovative and helpful developer tools available today. These tools are designed to streamline workflows, enhance collaboration, and boost productivity, enabling developers to build high-quality software more efficiently and effectively than ever before."
      />
      <div className="flex justify-center items-start p-10 min-h-screen">
        <div className="bg-gray-50 shadow-md rounded-lg p-16 flex space-x-16">
          {/* Product Image Section */}
          <div className="w-1/2">
            <img
              src={product_img} // Replace with your image URL
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Information Section */}
          <div className="w-1/2">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">
              {product_name}
            </h1>
            <p className="text-gray-500 mt-1">
              <span className="font-medium text-black">TotalCount: </span>
              {product_totalcount}
            </p>

            {/* Payment Options */}
            <p className="text-md py-4 text-gray-500 mt-2">
              {product_description}.It has become the go-to code editor for
              developers working with modern technologies like Node.js, React,
              and Python. Its integration with GitHub, Docker, and Azure
              enhances workflow efficiency, making it ideal for full-stack
              development.
            </p>

            {/* Product Metadata */}
            <p className="text-sm mt-2 text-blue-500 cursor-pointer">
              <span className="font-medium text-black">Tags:</span>{" "}
              {[product_tags[0]]}
            </p>

            {/* Add to Cart Button */}
            <div className="flex items-center gap-6">
              <button className="mt-4 w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors">
                Add to Cart
              </button>
              <button className="mt-4 w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
