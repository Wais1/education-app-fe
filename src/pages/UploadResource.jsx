import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contentService from '../content/contentService'

function UploadResource() {
    const [text, setText] = useState('')
    const [video, setVideo] = useState('')
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {user} = useContext(UserContext)

    async function createResource(link) {
        try {
            // Check if this outputs
            // not sustainable method to auth..
            const token = user.token
            console.log(token);

            // Not create goal, chag
            await contentService.createGoal(link)
            // await contentService.createResource(link)

            // // If success, updatel ocalstate
            setIsSuccess(true)
            setIsError(false)
            setMessage('Learning resource has been uploaded :)')
            // show nes layout: go back home button or make a new resource
        } catch (error) {
            // look for errors
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
            setMessage(message)
            setIsError(true)
        }
    }

    // move this
    async function getResource(link) {
        try {
            const token = user.token
            console.log(token);

            // Something like this mayb?
            // const newResource = await contentService.getResource(link)

            const goals = await contentService.getResource()
            console.log(goals);
            // await contentService.getResource(link)
            
            // Action.payload

        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
            console.log(message);
        }

    }

    // Gets embed link fro ma video link to submit
    const getYoutubeEmbedLink = () => {

    }

    // Each section / topic for learning can have a code, and links are organized by that code, and requests are made 
    // to that topic's code too.

    
    const onSubmit = e => {
        e.preventDefault()

        getResource('test')

        // Can do this as async await call to contentService
        // dispatch(createGoal({text}))
    }
  return (
    //   Make registration form reach min height of screen, background color gradient, with padding for mobile
    <div className="body-bg min-h-screen pt-12 pb-6 px-2 md:px-0 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* Uses mx-auto to center the form, with mx-w-lg (max width large) lg  to add space on side */}
      <header className="max-w-lg mx-auto">
          {/* Style paragraph heading */}
        <p className="text-4xl font-bold text-white">Upload</p>
      </header>
      
      {/* White background (bg-white), centers with same command, margin top and bottom, shadow,
       rounding, padding (larger on desktop with md:p-12) */}
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className='font-bold text-xl'>Upload</h3>
          <p className='text-gray-600 pt-2'>Upload a Learning Resource for others.</p>
        </section>
          {/* TEMP ALERTBOX if error */}
          { isError &&
          <span className="flex bg-rose-600 p-3.5 rounded-md mt-6">
            <p className="ml-4 text-white"> <FontAwesomeIcon icon={faWarning} transform='left-10 grow-5' /> {message} </p>
          </span> }
        <section className='mt-7'>
            {/* Flex column makes each element take an entire row, not side by side */}
          <form onSubmit={onSubmit} className='flex flex-col'>
              {/* Add gray background, padding and margins to both the label and input */}
            <div className='mb-6 pt-3 rounded bg-gray-200'>
                {/* Block makes each element take entire row so theyre not side by side  */}
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>YouTube Video link</label>
              {/* Add gray background to input, full width and rounded. Remove outline on focus. add border-bottom to have purple border on focus, and gray on
              neutral. add transitions of 500 ms between neutral and hover state. Finally add padding */}
              <input type='text' id='text' name='text' value={video} onChange={(e) => setVideo(e.target.value)} placeholder='Enter a YouTube link' class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
            </div>
            {/* Same style as above */}
            {/* <div className='mb-6 pt-3 rounded bg-gray-200'>
              <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'>Password</label>
              <input type='password' id='password' name='password' value={password} onChange={onChange} placeholder='Enter password' class='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3' />
            </div> */}
            {/* Flex justify-end moves forgot your password to the end (right)  */}
            <div className='flex justify-end'>
              <Link to={'/about'} className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>
                  What is this?
              </Link>
            </div>
            {/* Button styles with color and padding, shadow and round */}
            <button type='submit' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200'>
              Submit
            </button>
          </form>
        </section>
      </main>
      {/* Define max width for screen, then center with mx-auto. then center text with text-center */}
      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">Go back <Link to={'/'}><strong className="font-bold hover:underline">Home.</strong></Link> </p>
      </div>
      
    </div>
  )
}
export default UploadResource