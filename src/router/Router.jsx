import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import Profile from "../components/shared/Profile";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import AcceptProduct from "../pages/AcceptProduct";
import AddProductPage from "../pages/AddProductPage";
import DashboardProductDetails from "../pages/DashboardProductDetails";
import ErrorPage from "../pages/ErrorPage";
import HomePages from "../pages/HomePages";
import ManageUser from "../pages/ManageUser";
import MyProductPage from "../pages/MyProductPage";
import PaymentPage from "../pages/PaymentPage";
import ProductPage from "../pages/ProductPage";
import ReportPage from "../pages/ReportPage";
import ReviewProductPage from "../pages/ReviewProductPage";
import UpdateProduct from "../pages/UpdateProduct";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
      {
        path: "/:type/:id",
        element: (
          <PrivateRouter>
            <ProductPage />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://devspotlight-server.vercel.app/api/v1/${params.type}/${params.id}`
          ),
      },
      {
        path: "/product",
        element: (
          <PrivateRouter>
            <AcceptProduct />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "add-product",
        element: <AddProductPage />,
      },
      {
        path: "my-product",
        element: <MyProductPage />,
      },
      {
        path: "update/:id",
        element: <UpdateProduct />,
      },
      {
        path: "review-queue",
        element: <ReviewProductPage />,
      },
      {
        path: "details/:id",
        element: <DashboardProductDetails />,
      },
      {
        path: "reported",
        element: <ReportPage />,
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
