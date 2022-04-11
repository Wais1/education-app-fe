import { Link, useNavigate } from 'react-router-dom'

function SuccessfulUpload() {
    
    const navigate = useNavigate()

  return (
    //   Make registration form reach min height of screen, background color gradient, with padding for mobile
    <div className="body-bg min-h-screen pt-12 pb-6 px-2 md:px-0 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Uses mx-auto to center the form, with mx-w-lg (max width large) lg  to add space on side */}
      <header className="max-w-lg mx-auto">
          {/* Style paragraph heading */}
        <p className="text-4xl font-bold text-white">Success!</p>
      </header>

      {/* White background (bg-white), centers with same command, margin top and bottom, shadow,
       rounding, padding (larger on desktop with md:p-12) */}
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className='font-bold text-xl'>Awesome!</h3>

          <p className='text-gray-600 pt-2'>Your learning resource has been uploaded.</p>
        </section>
        <section className='mt-7'>
            {/* Flex column makes each element take an entire row, not side by side */}
          <form className='flex flex-col'>
            <button onClick={() => navigate('/')} type='submit' className='bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold py-5 rounded shadow-lg hover:shadow-xl transition duration-200'>
                Go Back Home
            </button>
            {/* Flex justify-end moves forgot your password to the end (right)  */}
            <div className='flex mx-auto mt-5'>
              <Link to={'/upload'} className=' text-purple-600  hover:text-purple-700 hover:text-purple-700 mb-6'>
                  Upload another
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
export default SuccessfulUpload