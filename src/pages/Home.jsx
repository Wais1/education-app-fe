import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-1">Header</div>
      </div>

      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-200">
          {/* Left sidebar */}
          <div class="col-span-2">
            <p>Content</p>
            <p>Math</p>
          </div>

          {/* Main Content */}
          <div class="col-span-8">
            <button class="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
              <FontAwesomeIcon icon={faArrowRotateRight} transform="left-5" />
              Change Resource
            </button>
            <button class="bg-blue-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faArrowRight} transform="left-5" />
              Next
            </button>
          </div>

          {/* Right Side Bar */}
          <div class="col-span-2">
            <p>ClassRoom</p>
            <p>Practice Resources</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
