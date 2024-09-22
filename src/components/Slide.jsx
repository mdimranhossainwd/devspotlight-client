import { Link } from "react-router-dom";

const Slide = ({ image, text, paragraph }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-josefin font-bold text-white lg:text-4xl">
            {text}
          </h1>
          <br />
          <p className="text-white text-lg w-1/2 mx-auto mb-16">{paragraph}</p>
          <Link className="w-full px-7 rounded-full py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-[#7ed56f] to-[#28b485] lg:w-auto">
            See What's New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
