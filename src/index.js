import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';
import Question from './component/Question';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Question/>
  },
  {
    path : "/home",
    element : <Home/>
  },
  {
    path:"/about",
    element:<About/>
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
    path:"/question",
    element:<Question/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router ={router}/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();