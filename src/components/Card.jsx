import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({ item, type }) => {
  const {
    _id,
    product_name,
    product_img,
    product_tags,
    product_description,
    product_totalcount,
    product_links,
    timestamp,
  } = item || {};

  // Add state for the upvote count
  const [voteCount, setVoteCount] = useState(product_totalcount);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setVoteCount(voteCount + 1); // Increase vote count by 1
      setHasUpvoted(true); // Mark as upvoted
    }
  };
  return (
    <div className="max-w-md overflow-hidden shadow-md ">
      <img
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
        className="object-cover w-full h-60"
        src={product_img}
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <Link
            to={`/${type}/${_id}`}
            className="block mt-2 text-lg font-semibold text-black transition-colors duration-300 font-josefin transform hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {product_name}
          </Link>
          <span className="text-xs font-medium underline text-blue-600 lowercase dark:text-blue-400">
            {[product_tags[0]]}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {product_description.substring(0, 54)}
        </p>

        <div className="mt-4">
          <div className="text-lg flex items-center justify-between gap-3 font-semibold w-12 ">
            <div
              onClick={handleUpvote}
              className="text-3xl text-gray-200 cursor-pointer border p-1 rounded-md"
            >
              <IoMdArrowDropup />
            </div>
            <span>{voteCount}</span>
            <p className="font-semibold ml-24">{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
