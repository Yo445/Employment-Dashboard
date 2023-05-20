import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import Home from "./routes/Home";
// import "./App.css";
import Pending from "./routes/Pending/src/Pending"
import MangeApplicants from "./routes/MangeApplicants/src/MangeApplicants";
import MangeJobs from "./routes/MangeJobs/src/ManageJob";
import DescriptionJob from "./routes/Description/src/DescriptionJob";
import Job_history from "./routes/JopHistory/Job_history";
import ApplicantHistory from "./routes/ApplicantHistory/ApplicantHistory"
import ApplyingJobs from "./routes/ApplyingJobs/ApplyingJobs"
import LoginSignupContainer from "./components/LoginSignupContainer/LoginSignupContainer"
import NavbarA from "./components/NavbarA";
import  Navbar  from "./components/Navbar";
const AppLayout = () => (
  <>
    <Navbar />
    < Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"MangeJobs",
        element : <MangeJobs/>
      },
      {
        path: "MangeApplicants",
        element: <MangeApplicants />,
      },
      {
        path:"Pending",
        element : <Pending/>
      },
      {
        path:"DescriptionJob",
        element : <DescriptionJob/>
      },
      {
        path:"Job_history",
        element : <Job_history/>
      },
      {
        path:"ApplicantHistory",
        element : <ApplicantHistory/>
      },
      {
        path:"ApplyingJobs",
        element : <ApplyingJobs/>
      },
      {
        path:"Login",
        element : <LoginSignupContainer/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
