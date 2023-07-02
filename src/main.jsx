import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./componenets/home/Home";
import About from "./componenets/about/About";
import Skills from "./componenets/skills/Skills";
import Projects from "./componenets/projects/Projects";
import Contact from "./componenets/contact/Contact";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "skill",
        element: <Skills/>
      },
      {
        path: "project",
        element: <Projects/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
