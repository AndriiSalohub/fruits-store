import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import App from "./App.jsx";
import StorePage from "./pages/StorePage.jsx";
import BagPage from "./pages/BagPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/store",
    element: <App />,
    children: [
      {
        path: "/store",
        element: <StorePage />,
      },
    ],
  },
  {
    path: "/bag",
    element: <App />,
    children: [
      {
        path: "/bag",
        element: <BagPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
