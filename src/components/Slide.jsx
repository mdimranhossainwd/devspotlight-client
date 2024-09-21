import { Link } from "react-router-dom";

const Slide = ({ image, text, paragraph }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-josefin font-bold text-white lg:text-4xl">
            {text}
          </h1>
          <br />
          <p className="text-white text-lg w-1/2 mx-auto mb-16">{paragraph}</p>
          <Link
            to="/add-job"
            className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#005A5B] rounded-md lg:w-auto focus:outline-none"
          >
            See What's New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
