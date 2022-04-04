import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRotateRight,
  faArrowRight,
  faUpload,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"

function Content() {
  return (
    // Top and bottom margin here
    <div className="mt-5 mb-5">
      <div class='bg-white shadow'>
        {/* <div class='max-w-7xl mx-auto py-1'>Header</div> */}
      </div>
      <div class=''>
        <div class='max-w-7xl mx-auto grid grid-cols-12'>
          {/* Left sidebar */}
          <div class='col-span-2'>
            {/* Back Button */}
            <button class='bg-transparent font-semibold text-gray-600 hover:text-gray-500 py-2 px-4 rounded'>
              <FontAwesomeIcon icon={faArrowLeft} transform='grow-30 left-10' />
              <p className="mt-2">Go Back</p>
            </button>
            {/* Navigation Info */}
            <div className="mt-5">
              <p>SAT</p>
              <p>Math</p>
            </div>

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
            <div className="flex mt-3"> 
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
            <p className="text-lg mt-2">Description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis ac erat porttitor laoreet. Mauris vehicula elit a eros suscipit, sit amet accumsan urna pulvinar. 
              Proin venenatis convallis metus, eu pellentesque erat ornare non. Cras at sem ligula. Proin at ligula pretium magna lacinia vehicula nec vitae mi. Morbi non sem tincidunt 
              ante efficitur molestie nec sed velit. Nam in tempor nisl. Praesent tincidunt lacinia lectus eu dignissim. In consectetur dolor aliquet ornare pretium. Donec sed sem luctus, 
              dictum erat id, eleifend nibh. Proin non ligula non enim dapibus semper. Donec faucibus porttitor ultrices. Curabitur sapien lorem, consectetur vel elementum at, iaculis ac neque. Sed ac lacus orci.</p>
            
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

export default Content
