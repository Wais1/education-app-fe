import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer() {
  return (
    <footer className="relative bg-sky-500 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl text-white font-semibold">
              EducationApp
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Experience a new way to learn online
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
              <i className="fa-brands fa-twitter"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="#">About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="#">Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="#">Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="#">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="#">Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}{" "}
              <Link to="/">
                <p className="text-gray-200 hover:text-gray-900"> </p>
                EducationApp
              </Link>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer