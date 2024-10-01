import useAuth from "../hooks/useAuth";
const AddProductPage = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="max-w-3xl mx-auto my-6 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-josefin text-center font-bold mb-6">
        Add a Product
      </h2>
      <form className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            placeholder="Product Name here ...."
            id="name"
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
            placeholder="Product Image Link ..."
            name="img"
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
              defaultValue={user?.displayName}
              disabled
              className=" w-full px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
            <input
              defaultValue={user?.email}
              disabled
              className=" w-full px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
            <img
              src={user?.photoURL}
              alt="Owner"
              className="w-16 h-16 object-cover rounded-full border border-gray-300"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags
          </label>
          <input
            type="text"
            placeholder="Product Tags"
            name="tags"
            required
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#7ed56f] focus:border-[#7ed56f] sm:text-sm"
            placeholder="e.g., https://product.com"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-white font-medium rounded-md hover:"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
