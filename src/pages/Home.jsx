import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRotateRight,
  faArrowRight,
  faUpload,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"

function Home() {
  return (
    <div>
      <div class='bg-white shadow'>
        <div class='max-w-7xl mx-auto py-1'>Header</div>
      </div>
      <div class=''>
        <div class='max-w-7xl mx-auto grid grid-cols-12'>
          {/* Left sidebar */}
          <div class='col-span-2'>
            {/* Back Button */}
            <button class='bg-transparent font-semibold text-gray-800 hover:text-gray-500 py-2 px-4 rounded'>
              <FontAwesomeIcon icon={faArrowLeft} transform='grow-10 left-8' />
              Back
            </button>
            <p>SAT</p>
            <p>Math</p>
            {/* Upload Resource Button */}
            <button class='bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 mt-5 `border border-orange-600 hover:border-transparent rounded'>
              <FontAwesomeIcon icon={faUpload} transform='left-5' />
              Upload Resource
            </button>
          </div>
        
          {/* Main Content */}
          <div class='col-span-8'>
            {/* Change Resource Button */}
            <button class='bg-transparent hover:bg-orange-500 text-orange-600 font-semibold hover:text-white py-2 px-4 border border-orange-600 hover:border-transparent rounded'>
              <FontAwesomeIcon icon={faArrowRotateRight} transform='left-5' />
              Change Resource
            </button>
            {/* Next Button */}
            <button class='bg-blue-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded ml-2'>
              <FontAwesomeIcon icon={faArrowRight} transform='left-5' />
              Next
            </button>

            {/* Youtube Learning Resource */}
            <div className="flex mt-2"> 
              <iframe className="flex-1"
                width='560'
                height='315'
                src='https://www.youtube.com/embed/gy1B3agGNxw'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <p>Description of content</p>
            
          </div>

          {/* Right Side Bar */}
          <div class='col-span-2'>
            <p>ClassRoom</p>
            <p>Practice Resources</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
