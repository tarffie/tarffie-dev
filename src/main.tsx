import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import  ErrorPage from "./error-page.tsx";
import  About from "./routes/about.tsx";
import  Blog from "./routes/blog.tsx";
import  Root from "./routes/root.tsx";
import './index.css';

const router = createBrowserRouter([
  {
    path : "/",
    element: <About />,
    errorElement: <ErrorPage />,
  }, 
  {
    path : "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
);
