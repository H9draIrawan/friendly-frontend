import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";
import { authRoutes } from "../features/auth/routes/AuthRoutes";

export const AppRoutes = createBrowserRouter([
  {
    index: true,
    element: <Navigate to={"/home"} />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "auth",
        children: [...authRoutes],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
