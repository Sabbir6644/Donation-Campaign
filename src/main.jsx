import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Components/MainLayout';
import Donation from './Donation';
import Statistics from './Statistics';
import Home from './Components/Home';
import CardDetails from './Components/CardDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: ()=> fetch('data.json'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: `/Details/:title`,
        element: <CardDetails></CardDetails>,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
