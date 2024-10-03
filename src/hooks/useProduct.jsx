import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
const useProduct = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const { refetch, data: product = [] } = useQuery({
    queryKey: ["product", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`/add-products?email=${user?.email}`);
      return data;
    },
  });
  return [product, refetch];
};

export default useProduct;
