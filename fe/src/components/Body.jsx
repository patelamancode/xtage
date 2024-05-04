import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";
import ModelDetail from "../pages/ModelDetail";

const Body = () => {
    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/models/:id",
            element: <ModelDetail />
        }
    ])
  return (
    <div className="mx-10 w-auto h-full">
    <RouterProvider router={appRoutes} />
    </div>
  )
}

export default Body
