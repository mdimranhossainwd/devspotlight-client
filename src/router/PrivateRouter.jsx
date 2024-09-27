import { Navigate, useLocation } from "react-router-dom";
import "../custom.css";
import useAuth from "../hooks/useAuth";
const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
  if (user) return children;

  return <Navigate to="/login" state={location?.pathname} replace={true} />;
};

export default PrivateRouter;
