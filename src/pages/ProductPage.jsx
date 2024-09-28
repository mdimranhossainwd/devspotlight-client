import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TopHeading from "../components/shared/TopHeading";
import useAuth from "../hooks/useAuth";
const ProductPage = () => {
  const navigate = useNavigate();
  const productInfo = useLoaderData();
  const {
    _id: productId,
    product_name,
    product_img,
    product_tags,
    product_description,
    product_totalcount,
    product_links,
  } = productInfo || {};
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.image.value;
    const review = form.review.value;
    const formData = { name, img, review, rating, productId };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/reviews",
        formData
      );
      toast.success(`${product_name} has Review Successfully`);
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

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

      <div className="">
        <Tabs className="text-center space-y-3 max-w-6xl mx-auto">
          <TabList>
            <Tab>Description</Tab>
            <Tab>Review</Tab>
          </TabList>

          <TabPanel>
            <p className="text-md py-4 text-gray-500 mt-2">
              Discover [Product Name], a cutting-edge tool designed to help
              developers streamline their workflow and boost productivity. From
              seamless integrations to intuitive features, see how this product
              can take your development process to the next level Learn from the
              best. [Developer Name] shares their tips, tricks, and lessons
              learned while building [Product Name], providing valuable insights
              for aspiring developers. Unlock the potential of [Product Name]
              with features like [Feature 1], [Feature 2], and [Feature 3].
              Learn more about how it stands out from the crowd and what makes
              it a must-have for developers.
            </p>
          </TabPanel>
          <TabPanel>
            <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold font-josefin">
                  Be the First to Review {product_name}
                </h2>
                <p className="text-md text-gray-500 pb-6">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="block text-gray-700 font-bold mb-2">
                    Your rating *
                  </label>
                  <div className="flex items-center justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={`text-2xl ${
                          star <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setRating(star)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={user?.displayName}
                    disabled
                    name="name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Image *
                  </label>
                  <input
                    type="img"
                    className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={user?.photoURL}
                    disabled
                    name="image"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Your review *
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    name="review"
                    required
                  ></textarea>
                </div>

                {submitted && (
                  <p className="text-green-500 mb-4">
                    Thank you for submitting your review!
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductPage;
