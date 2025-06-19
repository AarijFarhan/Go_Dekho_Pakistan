import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { createRoutesFromElements, Route, Router } from "react-router-dom";
import Layout from "./components/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/navigation";
import "./index.css"; 
import Contact from "./pages/contact";

// Define router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route index element={<Contact />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
