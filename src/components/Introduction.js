import React from 'react'
import introduction from "../assets/images/Welcome Image.jpg"
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Introduction = () => {
    return (
        <>

  
        <div className="max-w-7xl mx-auto p-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:p-2">
                <div className="col-span-1">
                <h1 class="text-4xl lg:text-5xl font-bold">Welcome to Our <span class="text-green-700">Company</span></h1>
            <div class="w-20 h-2 bg-green-700 my-4"></div>
                    {/* <p class="font-bold text-xl">
                        <span class="text-teal-800 mx-1 font-extrabold text-3xl relative inline-block stroke-current">
                            Welcome to Our Company
                            <svg class="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span>
                    </p> */}
                    <br />
                    <p className="text-lg text-black-500 tracking-wide text-opacity-0"> Greetings from Abhi Solution Technology, your reliable manufacturer, exporter & supplier of state-of-the-art GPS Batteries, POS Machine Batteries, Solar Batteries, Electric Vehicle Batteries. Located in the centre of Ambala, Haryana, we are more than simply producers and distributors—we are the designers of smooth travel experiences, the facilitators of accurate navigation, and the architects of your confidence in technology.   Pioneering Excellence: Not only do we as Abhi Solution Technology produce GPS batteries, but we also invented them. Our specialists explore the frontiers of innovation with uncompromising dedication, creating batteries that raise the bar for quality</p>
                    <div class="p-4 w-full">
            <form
                class="flex rounded-full px-4 py-2 ring-2 focus-within:ring-teal-500 hover:ring-2 hover:ring-teal-800">
                <input class="w-full appearance-none bg-gray-100 focus:outline-none" placeholder="Your email address" />
                <button class=" rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 px-8 py-1 text-sm font-medium hover:teal-700 focus:outline-none focus:ring-2 focus:ring-cyan-600/50" type="submit">Send
                </button>
            </form>
        </div>
{/*                     
                    <div data-element="fields" data-stacked="false" class="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
                        <div class="relative w-full mr-3 formkit-field">
                            <label for="member_email" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                                </svg>
                            </div>
                            <input id="member_email" class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" name="email_address" aria-label="Email Address" placeholder="Your email address..." required="" type="email"></input>
                        </div>
                        <button type="button" class="focus:outline-none text-white bg-teal-700 hover:bg-teal-800  focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"><span class="mr-1">Send</span>
                            <span class="ml-1">Enquiry</span></button>
                    </div> */}
                </div>
                <div className="w-full flex col-span-1 justify-center items-center">
                    <img class="px-2 h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer  hover:shadow rounded-3xl" src={introduction} alt="description" />
                </div>
            </div>

        </div>
        

        <section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Read trusted reviews from our customers
    </h2>

    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img alt="" src="https://avatars.githubusercontent.com/u/86837840?v=4" class="size-14 rounded-full object-cover"/>
          <div>
            <div class="flex justify-center gap-1.5 text-green-500">
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
            </div>
            <p class="mt-0.5 text-lg font-medium text-gray-900">Nalin Nishant</p>
          </div>
        </div>
        <p class="mt-4 text-gray-700">Powering up with Abhi Solution has been a game-changer! Their batteries are not only reliable but also eco-friendly, saving me money in the long run. Plus, their customer service is top-notch. If you want quality batteries that won't let you down, I highly recommend Abhi Solution!</p>
      </blockquote>
      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img alt="" src="https://avatars.githubusercontent.com/u/86837840?v=4" class="size-14 rounded-full object-cover"/>
          <div>
            <div class="flex justify-center gap-1.5 text-green-500">
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
            </div>
            <p class="mt-0.5 text-lg font-medium text-gray-900">Nalin Nishant</p>
          </div>
        </div>
        <p class="mt-4 text-gray-700">Powering up with Abhi Solution has been a game-changer! Their batteries are not only reliable but also eco-friendly, saving me money in the long run. Plus, their customer service is top-notch. If you want quality batteries that won't let you down, I highly recommend Abhi Solution!</p>
      </blockquote>
      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div class="flex items-center gap-4">
          <img alt="" src="https://avatars.githubusercontent.com/u/86837840?v=4" class="size-14 rounded-full object-cover"/>
          <div>
            <div class="flex justify-center gap-1.5 text-green-500">
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
              <FaStar class="h-5 w-5"/>
            </div>
            <p class="mt-0.5 text-lg font-medium text-gray-900">Nalin Nishant</p>
          </div>
        </div>
        <p class="mt-4 text-gray-700">Powering up with Abhi Solution has been a game-changer! Their batteries are not only reliable but also eco-friendly, saving me money in the long run. Plus, their customer service is top-notch. If you want quality batteries that won't let you down, I highly recommend Abhi Solution!</p>
      </blockquote>

    </div>
  </div>
</section>


<div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-5">
    <div class="flex flex-col items-center gap-4 rounded-lg bg-teal-600 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong class="text-xl text-white sm:text-xl"> Energize your machines like never before with our unstoppable batteries! </strong>
      <NavLink to="/product">
      <span to="/product" class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-teal-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90">
        <span class="text-sm font-medium"> View Our Products </span>
        <svg class="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
        </span>
      </NavLink>
    </div>
    </div>

        {/* // <div className="container mx-auto p-4" style={{display:"flex", justifyContent:"space-around"}}>
        //     <div className="flex flex-col md:flex-row items-center">
        //         <div className="md:w-1/2 p-4">
        //             <h2 className="text-3xl font-bold mb-4">Welcome to Our Company</h2>
        //             <p className="text-lg">
        //                 Greetings from Abhi Solution Technology, your reliable manufacturer, exporter & supplier of state-of-the-art GPS Batteries, POS Machine Batteries, Solar Batteries, Electric Vehicle Batteries. Located in the centre of Ambala, Haryana, we are more than simply producers and distributors—we are the designers of smooth travel experiences, the facilitators of accurate navigation, and the architects of your confidence in technology.   Pioneering Excellence: Not only do we as Abhi Solution Technology produce GPS batteries, but we also invented them. Our specialists explore the frontiers of innovation with uncompromising dedication, creating batteries that raise the bar for quality
        //             </p>
        //         </div>
        //     </div>
        //     <div>
        //     <img class="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={introduction} alt="description" />
        //     </div>
        // </div> */}
        </>
    )
}

export default Introduction