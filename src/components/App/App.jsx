import React from 'react'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../MasterLayout/MasterLayout'
import Error from '../Error/Error'
export default function App() {
  const routes=createBrowserRouter([{
    path:'/',element:<MasterLayout/>,errorElement:<Error/>,children:[
      {index:true,element:<Home/>},
      {path:'/react1',element:<Home/>},
      {path:'Portofolio',element:<Portfolio/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
    ]
  }])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
