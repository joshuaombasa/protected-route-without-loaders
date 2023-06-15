import React from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Layout from './components/Layout';
import Home from './Home';

import User, {loader as UserLoader} from './User';
import Login from './Login';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='protected' element={<User/>} loader={UserLoader} />
    <Route path='login' element={<Login />} />
  </Route>
))

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
