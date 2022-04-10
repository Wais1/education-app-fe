import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { faWarning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Can import {toast} for alerts
// HTTP calls from components should be done in useEffect

function Register() {
    // Component level state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    // Context API implementation
    const { user, isSuccess, isError, message, register, setError, reset} = useContext(UserContext)
    const { name, email, password, password2 } = formData


    // To redirect to another page eg. homepage
    const navigate = useNavigate()

    useEffect(() => {
      // Navigate to homepage if registration state is successful
      if(isSuccess || user) {
        navigate('/')
        console.log(user);
        console.log(isSuccess);
      }

      // Reset state. possibly do this after leaving page
      // reset()

      // Reset state, set everything to false
      // dispatch(reset())
    }, [user, isError, isSuccess, message, navigate])

    // Handles changes to input fields and updates state.
    // Takes entire form data as opposed to a state for each field (name, email, etc)
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,   // To add all other fields
            [e.target.name]: e.target.value, // Takes name value from target (input field) and assigns to the value.
        }))
    }

    // Handles form submission
    const onSubmit = (e) => {
        e.preventDefault()

        // Check if password equals confirm password field
        if(password !== password2) {
          setError('The confirm password field does not match') // Sets error in reducer
        } else {
          const userData = {
            name, email, password
          }
          // This dispatches the async register function
          console.log(userData);
          register(userData)
        }
    }

    return (
      //   Make registration form reach min height of screen, background color gradient, with padding for mobile
      <div className="body-bg min-h-screen pt-12 pb-6 px-2 md:px-0 bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* Uses mx-auto to center the form, with mx-w-lg (max width large) lg  to add space on side */}
        <header className="max-w-lg mx-auto">
            {/* Style paragraph heading */}
          <p className="text-4xl font-bold text-white text-center">Register</p>
        </header>
        
        {/* White background (bg-white), centers with same command, margin top and bottom, shadow,
         rounding, padding (larger on desktop with md:p-12) */}
        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 className='font-bold text-xl'>Welcome to EducationApp</h3>
            <p className='text-gray-600 pt-2'>Register an account.</p>
          </section>

          {/* TEMP ALERTBOX if error */}
          { isError &&
          <span className="flex bg-rose-600 p-3.5 rounded-md mt-6">
            <p className="ml-4 text-white"> <FontAwesomeIcon icon={faWarning} transform='left-10 grow-5' /> {message} </p>
          </span> }
  
          <section className='mt-7'>
              {/* Flex column makes each element take an entire row, not side by side */}
              {/* Form calls function onSubmit to handle */}
            <form onSubmit={onSubmit} className='flex flex-col'>
            <div className='mb-6 pt-3 rounded bg-gray-200'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Name</label>
                <input type='text' id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange} class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
              </div>
                {/* Add gray background, padding and margins to both the label and input */}
              <div className='mb-6 pt-3 rounded bg-gray-200'>
                  {/* Block makes each element take entire row so theyre not side by side  */}
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Email</label>
                {/* Add gray background to input, full width and rounded. Remove outline on focus. add border-bottom to have purple border on focus, and gray on
                neutral. add transitions of 500 ms between neutral and hover state. Finally add padding */}
                <input type='email' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
              </div>
              {/* Password field */}
              <div className='mb-6 pt-3 rounded bg-gray-200'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Password</label>
                <input type='password' id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
              </div>
                {/* Confirm password field */}
              <div className='mb-6 pt-3 rounded bg-gray-200'>
                <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Confirm Password</label>
                <input type='password' id='password2' name='password2' value={password2} placeholder='Confirm password' onChange={onChange} class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
              </div>
              {/* Forgot password link (Not needed for register) */}
              {/* Flex justify-end moves forgot your password to the end (right)  */}
              {/* <div className='flex justify-end'>
                <a href='#' className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>
                  Forgot your password?
                </a>
              </div> */}
              {/* Button styles with color and padding, shadow and round */}
              <button type='submit' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>
                Register
              </button>
            </form>
          </section>
        </main>
        {/* Define max width for screen, then center with mx-auto. then center text with text-center */}
        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
            <p className="text-white">Already have an account? <Link to={'/login'}><strong className="font-bold hover:underline">Login</strong></Link></p>
        </div>
        
      </div>
    )
  }
  
  export default Register
  