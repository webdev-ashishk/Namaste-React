import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import AppLayout from "./src/components/AppLayout";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/about/:about_id",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function Start() {
  return (
    <div>
      <p>start.jsx</p>
      <AppLayout />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <Start />
  </RouterProvider>
);
