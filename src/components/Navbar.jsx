import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='flex flex-row h-14 bg-gray-600 text-white justify-evenly' >

      <NavLink to={'/'} className={({isActive}) =>
        `my-auto ${ isActive ? "text-cyan-500 <h1>check</h1> "   : "text-white" }`
      }
      
      >Home</NavLink>

      <NavLink to={'/About'} className={({isActive}) =>
        `my-auto ${ isActive ? "text-cyan-500 <h1>check</h1> "   : "text-white" }`
      } >About</NavLink>

      <NavLink to={'/Contact'} className={({isActive}) =>
        `my-auto ${ isActive ? "text-cyan-500 <h1>check</h1> "   : "text-white" }`
      } >Contact</NavLink>
      
    </nav>
  )
}

export default Navbar
