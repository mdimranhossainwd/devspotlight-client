import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxios from "../hooks/useAxios";

const PaymentPage = () => {
  const axios = useAxios();
  const getPayment = async () => {
    try {
      const { data } = await axios.get("/payment");
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const { data: getPaymentData, refetch } = useQuery({
    queryKey: ["getPaymentData"],
    queryFn: getPayment,
  });

  console.log(getPaymentData);

  return (
    <div>
      <Helmet>
        <title>devspotlight || Payment's History</title>
      </Helmet>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-josefin font-semibold text-center">
          Payment History
        </h2>
      </div>

      <div className="px-3 md:px-10">
        <table className="table w-full">
          <thead className="w-full text-white bg-gradient-to-r from-[#7ed56f] to-[#28b485] text-center">
            <tr className="text-lg font-pt">
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Transition's ID</th>
            </tr>
          </thead>
          <tbody className="w-full items-center font-semibold text-center bg-[#f6f2f2]">
            {getPaymentData?.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{item?.name}</td>
                <td className="px-4 py-2">{item?.email}</td>
                <td className="px-4 text-green-500 py-2">{item?.status}</td>
                <td className="px-4 py-2">{item?.transId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPage;
