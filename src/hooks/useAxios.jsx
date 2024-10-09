import axios from "axios";

export const instance = axios.create({
  baseURL: "https://devspotlight-server.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error);
    }
  );
  return instance;
};

export default useAxios;
