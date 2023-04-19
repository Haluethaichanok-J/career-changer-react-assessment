import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import Home from './Home';
import Owner from './Owner';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: '/',
  element: <>
    <Home/>
  </>
},
{
  path: '/owner',
  element: <>
    <Owner/>
  </>
},{
  path: '/home',
  element: <>
    <Home/>
  </>
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
