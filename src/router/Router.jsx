import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePages from "../pages/HomePages";
import ProductPage from "../pages/ProductPage";
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
          fetch(`http://localhost:5000/api/v1/${params.type}/${params.id}`),
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
