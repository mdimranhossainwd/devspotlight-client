import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useRole = () => {
  const { user, loading } = useAuth();
  const [role, setIsRole] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    axios.get(`/users/${user?.email}`).then((res) => {
      setIsRole(res?.data?.role);
    });
  }, [user]);
  return [role];
};

export default useRole;
