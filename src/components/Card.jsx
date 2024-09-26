import { IoMdArrowDropup } from "react-icons/io";

const Card = ({ item }) => {
  const {
    _id,
    product_name,
    product_img,
    product_tags,
    product_description,
    product_totalcount,
    product_links,
  } = item || {};
  return (
    <div className="max-w-md overflow-hidden shadow-md ">
      <img
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
        className="object-cover  h-60"
        src={product_img}
      />

      <div className="p-6">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="block mt-2 text-lg font-semibold text-black transition-colors duration-300 font-josefin transform hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
            {product_name}
          </a>
          <span className="text-xs font-medium underline text-blue-600 lowercase dark:text-blue-400">
            {[product_tags[0]]}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {product_description}
        </p>

        <div className="mt-4">
          <div className="text-lg font-semibold  w-12 gap-3 text-center flex items-center">
            <div className="text-3xl text-[#7ed56f]">
              <IoMdArrowDropup />
            </div>
            <span>{product_totalcount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
