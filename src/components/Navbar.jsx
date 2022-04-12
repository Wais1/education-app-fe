import { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, logout, reset } = useContext(UserContext)
  const navigate = useNavigate()

  // Fixes a bug where opening nav bar hamburger menu and resizing will keep navbar open.
  const handleResize = () => { if(window.innerWidth > 1030) setNavbarOpen(false) }
 
  useEffect(() => {
    handleResize()

    // listens for resize and calls handle resize for rest of time.
    window.addEventListener('resize', handleResize)
  }, [])

  const onLogout = () => {
    // Call logout from reducer
    logout();

    // Reset the user logged in state
    reset();
    
    // Send user to homepage
    navigate('/')
  }


  return (
    <nav
      className= "relative shadow-sm bg-white shadow-lg flex flex-wrap items-center justify-between px-2 py-3 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            {/* ADDED FIXED position to logo / title to prevent 'glitching' position during resize window. might cause problems in future */}
            <p className="text-gray-800 text-xl text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap fixed top-0 left-10"> EducationApp </p> 
            </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} transform=' grow-6' />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? "block rounded shadow-xl p-5" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <Link to ="/about">
                {/* ADDED Conditional to ABOUT, if navabar open use flexible to keep it positioned in hamburger menu, otherwise keep it in fixed position on navbar. Can cause issues
                and complicates  long term. */}
              <p className= {"text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs font-bold " + (!navbarOpen && "fixed top-3 left-60")  }>
                About
              </p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
              </a>
            </li>

            <li className="flex items-center">

            </li>
            {/* Logout button */}
            {user ? (<>
             {!navbarOpen && <li className="text-gray-800">Hello <strong>{user.name}</strong></li> }
            <button className="text-red-700 font-semibold ml-8" onClick={onLogout}>Logout</button>
            </>
            ) : 
            // If not logged in, show  Register and Login button
            (
            <li className="flex items-center">
            {/* Register button */}
            <Link to='/register'> 
            <button className="text-black font-semibold hover:text-white py-2 mr-5 px-4 border hover:border-transparent border-black hover:bg-orange-500 rounded">
               Register 
            </button>
            </Link> 
              
            {/* Login Button */}
            <Link to='/login'>
              <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  {/* <i className="fas fa-arrow-alt-circle-down"></i>  */}
                  Login 
              </button>
            </Link> 
            </li> 
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}