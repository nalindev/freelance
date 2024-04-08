import React from 'react'
import introduction from "../assets/images/Welcome Image.jpg"

const Introduction = () => {
    return (
        <div className="max-w-7xl mx-auto p-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:p-2">
                <div className="col-span-1">
                    <p class="font-bold text-xl">
                        <span class="text-teal-800 mx-1 font-extrabold text-3xl relative inline-block stroke-current">
                            Welcome to Our Company
                            <svg class="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                            </svg>
                        </span>
                    </p>
                    <br />
                    <p className="text-lg text-black-500 tracking-wide text-opacity-0"> Greetings from Abhi Solution Technology, your reliable manufacturer, exporter & supplier of state-of-the-art GPS Batteries, POS Machine Batteries, Solar Batteries, Electric Vehicle Batteries. Located in the centre of Ambala, Haryana, we are more than simply producers and distributors—we are the designers of smooth travel experiences, the facilitators of accurate navigation, and the architects of your confidence in technology.   Pioneering Excellence: Not only do we as Abhi Solution Technology produce GPS batteries, but we also invented them. Our specialists explore the frontiers of innovation with uncompromising dedication, creating batteries that raise the bar for quality</p>
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
                    </div>
                </div>
                <div className="w-full flex col-span-1 justify-center items-center">
                    <img class="h-auto max-w-lg  transition-all duration-300 rounded-lg cursor-pointer  hover:shadow rounded-3xl" src={introduction} alt="description" />
                </div>
            </div>

        </div>


        // <div className="container mx-auto p-4" style={{display:"flex", justifyContent:"space-around"}}>
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
        // </div>
    )
}

export default Introduction