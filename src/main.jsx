import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './component/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Login from './pages/Login/Login';
import ErrorPage from './component/MainLayout/ErrorPage/ErrorPage';
import PhoneCard from './component/PhoneCard/PhoneCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/phones.json')
      },
      {
        path:'/favorites',
        element:<Favorites></Favorites>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/phones/:id',
        element:<PhoneCard></PhoneCard>,
        loader:()=> fetch('/phones.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
