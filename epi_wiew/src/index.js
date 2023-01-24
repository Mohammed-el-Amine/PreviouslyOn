import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Accueil from './Componants/Acceuille';
import Series from './Componants/Series'
import Profile from './Componants/Profile';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
//   Route,
//   Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Accueil />
    ),
  },
  {
    path: "Profile",
    element: (
        <Profile />
    ),
  },
  {
    path: "Series",
    element: (
        <Series />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
