import { Link } from "react-router-dom"

function Login() {
  return (
    //   Make registration form reach min height of screen, background color gradient, with padding for mobile
    <div className="body-bg min-h-screen pt-12 pb-6 px-2 md:px-0 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Uses mx-auto to center the form, with mx-w-lg (max width large) lg  to add space on side */}
      <header className="max-w-lg mx-auto">
          {/* Style paragraph heading */}
        <p className="text-4xl font-bold text-white text-center">Login</p>
      </header>
      
      {/* White background (bg-white), centers with same command, margin top and bottom, shadow,
       rounding, padding (larger on desktop with md:p-12) */}
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className='font-bold text-xl'>Welcome to EducationApp</h3>
          <p className='text-gray-600 pt-2'>Sign in to your account.</p>
        </section>

        <section className='mt-10'>
            {/* Flex column makes each element take an entire row, not side by side */}
          <form className='flex flex-col'>
              {/* Add gray background, padding and margins to both the label and input */}
            <div className='mb-6 pt-3 rounded bg-gray-200'>
                {/* Block makes each element take entire row so theyre not side by side  */}
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Email</label>
              {/* Add gray background to input, full width and rounded. Remove outline on focus. add border-bottom to have purple border on focus, and gray on
              neutral. add transitions of 500 ms between neutral and hover state. Finally add padding */}
              <input type='text' id='email' class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
            </div>
            {/* Same style as above */}
            <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Password</label>
              {/* Same style as above */}
              <input type='password' id='password' class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
            </div>
            {/* Flex justify-end moves forgot your password to the end (right)  */}
            <div className='flex justify-end'>
              <a href='#' className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>
                Forgot your password?
              </a>
            </div>
            {/* Button styles with color and padding, shadow and round */}
            <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200' type='submit'>
              Sign In
            </button>
          </form>
        </section>
      </main>
      {/* Define max width for screen, then center with mx-auto. then center text with text-center */}
      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">Don't have an account? <Link to={'/register'}><strong className="font-bold hover:underline">Sign up.</strong></Link> </p>
      </div>
      
    </div>
  )
}

export default Login
