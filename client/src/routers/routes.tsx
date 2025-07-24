import ProtectRoute from "@/components/protectRoute";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <HomePage />
        </ProtectRoute>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
