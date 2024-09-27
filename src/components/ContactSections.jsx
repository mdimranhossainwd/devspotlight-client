import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import video from "../assets/video.mp4";

const ContactSections = () => {
  return (
    <div>
      <section className="relative my-20 bg-opacity-0">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover filter grayscale"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-gray-900 opacity-30"></div>

        <div className="relative z-10 container px-6 py-28 mx-auto ">
          <div className=" text-center text-white mb-14">
            <h2 className="text-6xl font-josefin font-bold">Contact Us</h2>
            <p className="py-3 text-lg font-medium mb-6">
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 mt-10 lg:grid-cols-2">
            <div className="text-white space-y-6">
              <div className="flex items-center text-lg gap-4">
                <span>
                  <CiLocationOn />
                </span>
                <p>Cecilia Chapman 711-2880 Nulla St. Mank...</p>
              </div>
              <div className="flex items-center text-lg gap-4">
                <span>
                  <IoCallOutline />
                </span>
                <p>(257) 563-7401</p>
              </div>
              <div className="flex items-center text-lg gap-4">
                <span>
                  <CiMail />
                </span>
                <p>abc@gmail.com</p>
              </div>

              <div className="my-12">
                <h2 className="text-xl font-semibold mb-8">Follow Us</h2>
                <div className="flex items-center gap-5 text-xl">
                  <FaFacebookF />
                  <FaXTwitter />
                  <FaLinkedinIn />
                  <FaInstagram />
                </div>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2  text-black text-lg font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2  text-black text-lg font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-black text-lg font-semibold">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-black text-lg font-semibold">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSections;
