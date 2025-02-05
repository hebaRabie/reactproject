import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


let x  = createHashRouter ([
  {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'about',element:<About/>},
  {path:'portfolio',element:<Portfolio/>},
  {path:'contact',element:<Contact/>},
  ]}
])
function App() {

  return (
<RouterProvider router={x}></RouterProvider>
  )
}

export default App
