import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Transactions from './components/Transactions';
import Users from './components/Users';
import Profile from './components/Profile';
import Account from './components/Account';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/transactions",
      element:<Transactions/>
    },
    {
      path:"/users",
      element:<Users/>
    },
    {
      path:"/profile/:id",
      element:<Profile/>
    },
    {
      path:"/Account",
      element:<Account/>
    }


  ]
}
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
