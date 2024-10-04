import { NavLink } from "react-router-dom";

const ProductCard = ({ product, refetch }) => {
  const {
    _id,
    name,
    img,
    descriptions,
    ownerName,
    link,
    tags,
    timestamp,
    photo,
    status,
  } = product || {};
  return (
    <div className="container mx-auto px-10 mt-10">
      <table className="w-full bg-gray-200 text-black">
        <tbody>
          <tr className="border-b text-center font-medium">
            <td className="py-3 px-6">
              <span className="">{name}</span>
            </td>
            <td className="py-3 px-6">11</td>
            <td className="py-3 px-6">{status}</td>

            <td className="py-3 px-6">
              <NavLink to={`/dashboard/update/${_id}`}>
                {/* <button className="text-gray-500"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pencil"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
                {/* </button> */}
              </NavLink>
            </td>
            <td className="py-3 px-6">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0H5"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;
