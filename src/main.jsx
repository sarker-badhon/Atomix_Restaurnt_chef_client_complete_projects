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
import Registration from './components/Registration.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import ChefRecipes from './ChefRecipes.jsx';
import Recipes from './components/recipes/recipes.jsx';
import PrivateRoute from './components/privateRoute/PrivateRoute.jsx';

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
        path:'/recipes',
        element:<Recipes></Recipes>
      },
      {
        path:"/data/:id",
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute> ,
        loader:({params})=> fetch(`https://atomix-server-sarker-badhon.vercel.app/data/${params.id}`)
        
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
        path:'/registration',
        element:<Registration></Registration>
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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
