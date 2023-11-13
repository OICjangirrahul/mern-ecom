import React from 'react';
import './App.css';
import './index.css';
import LoginPage from '../src/pages/LoginPage'
import SignupPage from '../src/pages/SignupPage'
import Home from '../src/pages/Home'
import Cart from './features/cart/Cart';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
