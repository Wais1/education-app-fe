import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from 'react'
import contentService from "../content/contentService"


import {
  faArrowRotateRight,
  faArrowRight,
  faUpload,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"

function Content() {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [video, setVideo] = useState('https://www.youtube.com/embed/FQPlEnKav48')
    
  // move this
    async function getResource(link) {
      try {
          // Removed because it makes errors for whatever reason
          // const token = user.token ? user.token : null
          // console.log(token);


          // Something like this mayb?
          // const newResource = await contentService.getResource(link)

          const content = await contentService.getResource()
          console.log(content);
          // await contentService.getResource(link)
          
          // Action.payload
          setVideo(content)
      } catch (error) {
          console.log(error);
          const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
          // console.log(message);
      }

  }
  // Check for user login for page
  useEffect(() => {
    // Get the learning resource on load. from contentService
    getResource()

    // Uses return to call something when component unmounts
    // return () => {

    // }
  }, [user, navigate])
  
  // Check for user login for button
  // Should separate these functions
  const protectRoute = () => {
    if(!user) {
      navigate('/login')
    } else {
      navigate('/upload')
    }
  }
  return (
    // Top and bottom margin here
    <div className="body-bg min-h-screen pt-12 pb-6 px-2 md:px-0 ">
      <div class='bg-white shadow'>
        {/* <div class='max-w-7xl mx-auto py-1'>Header</div> */}
      </div>
      <div class=''>
        <div class='max-w-7xl mx-auto grid grid-cols-11'>
          {/* Left sidebar */}
          <div class='col-span-2 px-2'>
            {/* Back Button */}
            {/* <button class='bg-transparent font-semibold text-gray-600 hover:text-gray-500 py-2 px-4 rounded'>
              <FontAwesomeIcon icon={faArrowLeft} transform='grow-20 left-10' />
              <p className="mt-4">Back</p>
            </button> */}
            {/* Navigation Info */}
            <div className="mt-5">
              <p className="font-semibold text-xl">Math</p>
              <p className="mt-2 text-lg">SAT Part 10</p>
              <p className="text-lg">How to divide fractions</p>
            </div>
            {/* Upload Resource Button */}
            <button onClick={protectRoute} class='bg-transparent hover:bg-orange-500 text-orange-600 sm:text-lg font-semibold hover:text-white py-2 px-4 mt-5 border border-orange-600 hover:border-transparent rounded'>
              <FontAwesomeIcon icon={faUpload} transform='left-5' />
              Upload Resource
            </button>
          </div>
        
          {/* Main Content */}
          <div class='col-span-8'>
            {/* Change Resource Button. need to add ID in params later */}
            <button onClick={getResource} class='bg-transparent hover:bg-orange-500 active:bg-orange-400 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent rounded'>
              <FontAwesomeIcon icon={faArrowRotateRight} transform='left-5' />
              Change Resource
            </button>
            {/* Next Button */}
            <button class='bg-blue-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded ml-2' onClick={()=>alert('This function is still in development.')}>
              <FontAwesomeIcon icon={faArrowRight} transform='left-5' />
              Next
            </button>

            {/* Youtube Learning Resource. Includes responsive tailwind for iframe md: lg: etc */}
            <div className="flex mt-3 aspect-w-16 aspect-h-9 "> 
              <iframe className="flex-1 "
                width='560'
                height='500'
                // Takes video from state, reset constantly by the changeResource function and backend
                src={video}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            {/* <p className="text-xl mt-4">Title</p> */}
            <p className="text-lg mt-2 mb-1 font-semibold">Description</p>
            <p>A fraction represents a part of a whole or, more generally, any number of equal parts. When spoken in everyday English, a fraction describes how many parts of a certain size there are, for example, one-half, eight-fifths, three-quarters.</p>
          </div>

          {/* Right Side Bar */}
          <div class='col-span-2'>
            {/* <p>ClassRoom</p>
            <p>Practice Resources</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
