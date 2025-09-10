import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='flex flex-row h-14 bg-gray-600 text-white justify-evenly' >

      <NavLink to={'/'} className="my-auto" >Home</NavLink>

      <NavLink to={'/About'} className="my-auto" >About</NavLink>

      <NavLink to={'/Contact'} className="my-auto" >Contact</NavLink>
      
    </nav>
  )
}

export default Navbar
