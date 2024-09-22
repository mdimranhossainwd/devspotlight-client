import { createBrowserRouter } from "react-router-dom";
import Login from "../components/authentication/Login";
import MainLayout from "../layout/MainLayout";
import HomePages from "../pages/HomePages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
