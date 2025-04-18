import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// style
import "./styles/index.css";

import App from "./App.tsx";
import Error from "./pages/Error.tsx";
// pages
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import TodoModal from "./pages/TodoModal.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/app",
        element: <Dashboard />,
        errorElement: <Error />,
        children: [
          {
            path: ":id",
            element: <TodoModal />,
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
