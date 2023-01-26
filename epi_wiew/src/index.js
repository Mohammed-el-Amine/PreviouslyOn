import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Accueil from './Componants/Acceuille';
import Series from './Componants/Series'
import Profile from './Componants/Profile';
import Movies from './Componants/Movies';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
//   Route,
//   Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  {
    path: "Movies",
    element: (
        <Movies />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
