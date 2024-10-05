import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Reviews from "../components/review/Reviews";
import TopHeading from "../components/shared/TopHeading";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useRole from "../hooks/useRole";
const ProductPage = () => {
  const navigate = useNavigate();
  const productInfo = useLoaderData();
  const [role] = useRole();
  const {
    _id: productId,
    product_name,
    product_img,
    product_tags,
    product_description,
    product_totalcount,
    product_links,
  } = productInfo || {};
  const [voteCount, setVoteCount] = useState(product_totalcount);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setVoteCount(voteCount + 1); // Increase vote count by 1
      setHasUpvoted(true); // Mark as upvoted
    }
  };
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const axios = useAxios();

  // Reported A product

  const handleReportProduct = async (e) => {
    const { data } = await axios.post("/report", productInfo);
    toast.success("Report sent! We will review it shortly.");
    console.log(data);
  };

  // Review Data Post on DB function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.image.value;
    const review = form.review.value;
    const formData = { name, img, review, rating, productId };

    try {
      const { data } = await axios.post("/reviews", formData);
      toast.success(`${product_name} has Review Successfully`);
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <Helmet>
        <title>devspotlight || Product Details</title>
      </Helmet>
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
              {voteCount}
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
              <button
                onClick={handleUpvote}
                className="mt-4 w-full bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors"
              >
                Upvoted
              </button>
              {role === "normal" && (
                <button
                  onClick={handleReportProduct}
                  className="mt-4 w-full text-gray-500 bg-gray-200 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-[#28b485] hover:to-[#7ed56f] hover:text-white transition-all duration-500 ease-in-out"
                >
                  Report
                </button>
              )}
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
              Conveniently engage client-centric technology through end-to-end
              supply chains. Phosfluorescently morph distributed human capital
              after goal-oriented convergence. Energistically morph global
              action items without pandemic benefits. Compellingly
              disintermediate interactive leadership whereas high standards in
              growth strategies. Monotonectally e-enable end-to-end data for
              client-based sources. Synergistically reinvent maintainable total
              linkage vis-a-vis top-line scenarios. Compellingly maintain state
              of the art solutions vis-a-vis cross-media quality vectors.
              Efficiently whiteboard extensive e-tailers after intermandated
              products. Proactively brand best-of-breed bandwidth through
              technically sound ROI. Conveniently transition viral leadership
              skills whereas diverse process improvements. Rapidiously
              reintermediate real-time initiatives rather than distributed
              schemas. Dramatically incentivize client-focused portals for
              backend results. Professionally architect extensive mindshare with
              high-payoff relationships. Rapidiously transition world-class
              action items vis-a-vis extensible experiences. Phosfluorescently
              exploit client-centered infomediaries via holistic mindshare.
              Dramatically synergize interactive ideas via enabled experiences.
              Compellingly provide access to revolutionary initiatives rather
              than backward-compatible intellectual capital. Seamlessly expedite
              synergistic potentialities before leveraged portals.
              Enthusiastically facilitate customer directed collaboration and
              idea-sharing after technically sound information. Holisticly
              create superior markets before resource sucking action items.
              Holisticly engage flexible resources.
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
      <div className="">
        <Reviews />
      </div>
    </div>
  );
};

export default ProductPage;
