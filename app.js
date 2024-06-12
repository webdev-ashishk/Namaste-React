import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import AppLayout from "./src/components/AppLayout";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Post from "./src/components/Post";
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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/posts/:pId",
    element: <Post />,
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
