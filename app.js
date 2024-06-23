import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./src/components/AppLayout";
import Error from "./src/components/Error";
import Hoc from "./src/components/Hoc";
import Parent from "./src/components/Parent";
import Post from "./src/components/Post";
// load about and contact as on demand loading
// import Contact from "./src/components/Contact";
// import About from "./src/components/About";
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/posts/:pId",
    element: <Post />,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<h1>Loading contact page ...</h1>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<h1>Loading about page...</h1>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/hoc",
    element: <Hoc />,
  },
  {
    path: "/liftingstateup",
    element: <Parent />,
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
