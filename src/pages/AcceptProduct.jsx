import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import TopHeading from "../components/shared/TopHeading";
import useAxios from "../hooks/useAxios";

const AcceptProduct = () => {
  const [itemPerPage, setItemPerPage] = useState(4);
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState();
  const [searchText, setSearchText] = useState("");
  const axios = useAxios();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `/accepted-products?page=${currentPage}&size=${itemPerPage}&sort=${sort}&search=${search}`
      );
      const acceptedData = data.filter((item) => item.status === "Accepted");
      setProduct(acceptedData);
      // setCount(acceptedData.length);
    };
    getData();
  }, [currentPage, itemPerPage, sort, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios.get(`/products-count?search=${search}`);
      setCount(data.count);
    };
    getCount();
  }, [search]);

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map(
    (elements) => elements + 1
  );
  console.log(pages);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  // Search a product tags
  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    setSearch(name);
    setCurrentPage(1);
  };

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div className="mt-8">
        <TopHeading heading="Only Acceptable Products Here " />
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                placeholder="Search by Product tags"
                aria-label="Enter Job Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 rounded-md transition-colors duration-300 transform bg-gradient-to-r from-[#7ed56f] to-[#28b485] focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
              value={sort}
              name="sort"
              id="sort"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Time</option>
              <option value="dsc">Biggest</option>
              <option value="asc">Lowest</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product?.map((product) => (
            <div
              key={product?._id}
              className="max-w-md overflow-hidden shadow-md "
            >
              <img
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                }}
                className="object-cover w-full h-60"
                src={product.img}
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <Link
                    className="block mt-2 text-lg font-semibold text-black transition-colors duration-300 font-josefin transform hover:text-gray-600 hover:underline"
                    tabIndex="0"
                    role="link"
                  >
                    {product.name}
                  </Link>
                  <p className="font-semibold ">{product.timestamp}</p>
                  <span className="text-xs font-medium underline text-blue-600 lowercase dark:text-blue-400">
                    {[product.tags]}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {product.descriptions.substring(0, 72)}
                </p>

                <div className="mt-4">
                  <div className="text-lg font-semibold  w-12 gap-3 text-center flex items-center">
                    <div className="text-3xl text-gray-200 cursor-pointer border p-1 rounded-md">
                      <IoMdArrowDropup />
                    </div>
                    <span>11</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#28b485]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#28b485] text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline  hover:bg-[#7ed56f] hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#28b485] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AcceptProduct;
