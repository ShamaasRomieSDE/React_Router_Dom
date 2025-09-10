import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/header/Home"
import About from "./components/header/About"
import Contact from "./components/header/Contact"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        
        <Route path="" element={<Home />} />

        <Route path="About" element={<About />} />

        <Route path="Contact" element={<Contact />} />

      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router}/>
      <Outlet />
    </>
  )
}

export default App
