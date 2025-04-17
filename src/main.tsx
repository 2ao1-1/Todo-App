import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <p>404</p>,
    children: [
      {
        path: "/",
        element: <p>Sign in</p>,
        errorElement: <p>404</p>,
      },
      {
        path: "/app",
        element: (
          <>
            <p>App</p>

            <Outlet />
          </>
        ),
        errorElement: <p>404</p>,
        children: [
          {
            path: ":id",
            element: <p>todo #id</p>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
