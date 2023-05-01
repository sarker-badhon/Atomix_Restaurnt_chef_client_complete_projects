import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Contacts from './components/Contacts.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/contacts',
        element:<Contacts></Contacts>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'*',
        element:<ErrorPage></ErrorPage>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
