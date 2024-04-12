import React, { useState, useEffect } from 'react'
import { FaHandPointRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUsPage() {
    useEffect(() => {
        AOS.init();
      }, [])

    const popup = <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
        </div>
        <div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
        </div>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p class="text-sm leading-6 text-gray-900">
                <strong class="font-semibold">Abhi Solution Technology</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Drop us your query so that we can reach out to you.
            </p>
            <a href="#" class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Enquiry now <span aria-hidden="true">&rarr;</span></a>
        </div>
        <div class="flex flex-1 justify-end">
            <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={() => setModel("")}>
                <span class="sr-only">Dismiss</span>
                <svg class="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
            </button>
        </div>
    </div>;

    const [Model, setModel] = useState(popup);
    return (
        <>
            {Model}
            <section class="relative z-10 overflow-hidden bg-teal-600 py-16 px-8 ">
                <div class="flex flex-wrap items-center text-center">
                    <h1 class="mt-0 mb-3 w-full text-3xl font-bold leading-relaxed sm:text-4xl sm:leading-relaxed md:text-[40px] md:leading-relaxed text-white ">
                        ABOUT US</h1>
                    <p class="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-white">Abhi Solution Technology</p>

                </div>
                <span class="absolute top-0 right-0 -z-10">
                    <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
                    </svg>
                </span>
            </section>
            
            
            <div className="max-w-7xl mx-auto p-8">
                <div class="flex items-center ">
                    <span class="text-gray-900/40"><a href="/" class="hover:text-teal-600">Products</a> / <span href="/" class="text-black">About Us</span></span>
                </div>

                
                <div class="lg:grid lg:grid-cols-3 lg:gap-24 lg:p-2">
                <div class="col-span-2">
                    <p className='py-2 w-full text-sm text-left text-black-500'>Greetings from Abhi Solution Technology, your reliable manufacturer, exporter & supplier of state-of-the-art GPS Batteries, POS Machine Batteries, Solar Batteries, Electric Vehicle Batteries.. Located in the centre of Ambala, Haryana, we are more than simply producers and distributors—we are the designers of smooth travel experiences, the facilitators of accurate navigation, and the architects of your confidence in technology.</p>
                    <h3 className='py-2 font-semibold'>Pioneering Excellence:</h3>
                    <p className='w-full text-sm text-left text-black-500'>Not only do we as Abhi Solution Technology produce GPS batteries, but we also invented them. Our specialists explore the frontiers of innovation with uncompromising dedication, creating batteries that raise the bar for quality. We provide each cell with a burst of luminosity so that your gadgets never stumble when taking the less-travelled route.</p>
                    <h3 className='py-2 font-semibold'>Craftsmanship in Every Watt:</h3>
                    <p className='w-full text-sm text-left text-black-500'>Our journey continues into creating experiences; it doesn't stop with production. We consider technology to be an artistic medium, and each GPS battery we make is a work of art that has been painstakingly crafted to improve your travels. Unwavering dependability combined with flawless craftsmanship ensures that your gadgets stay charged and point you in the direction of unlimited possibilities.</p>
                    <h3 className='py-2 font-semibold'>Your Trusted Travel Companion:</h3>
                    <p className='w-full text-sm text-left text-black-500'>Our currency in the fast-paced world of technology is trust. We know how important it is to have a trustworthy travel partner, and our batteries are just that—steadfast, dependable, and always prepared for the next adventure.</p>
                    <h3 className='py-2 font-semibold'>Beyond Boundaries:</h3>
                    <p className='w-full text-sm text-left text-black-500'>Although our roots are deeply ingrained in Ambala, our ambition is unbounded. We serve a wide range of clients, from local explorers to those travelling abroad, thanks to our global connections. We are a community that is passionate about flawless navigation and consistent quality, not simply a corporation.</p>


                <div className='py-8'>
                <div className='box-border hover:shadow-lg border-2 rounded-md'>
                <table class="w-full text-sm text-left text-black-500">
                            <tbody>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Nature of Business</td>
                                    <td class="py-3 px-6">Manufacturers, Exporters, Supplier, Trader</td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <td class="py-3 px-6">Number of Employees</td>
                                    <td class="py-3 px-6">20 People</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Year of Establishment</td>
                                    <td class="py-3 px-6">2016</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Market Covered</td>
                                    <td class="py-3 px-6">Globally</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Name of CEO</td>
                                    <td class="py-3 px-6">Mr. Anil Kumar</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">GST No</td>
                                    <td class="py-3 px-6">06BFMPK6084E1ZA</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Annual Turnover</td>
                                    <td class="py-3 px-6">Rs. 4-5 Crore Approx.</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Legal Status of Firm</td>
                                    <td class="py-3 px-6">Individual (Sole proprietorship)</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
                        <div class="w-full">
                            {/* SECOND HALF COlumn */}
                            <ul class="max-w-2xl mx-auto divide-y  shadow shadow-teal-600 rounded-xl hover:shadow-teal-800 hover:shadow">
                                <h3 className='text-xl  tracking-wide p-3 px-6 font-semibold'>Products</h3>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>GPA Batteries</span>
            </summary>

            <article class="px-4 pb-4">
                
<ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
        <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">4.7V 400mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">7.7V 1000mAh Lithium Ion+ Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">9.7V 30700mAh Lithium Ion Battery</a>
    </li>
</ul>

            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>POS Machine Batteries</span>
            </summary>

            <article class="px-4 pb-4">
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
        <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">4.7V 400mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">7.7V 1000mAh Lithium Ion+ Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">9.7V 30700mAh Lithium Ion Battery</a>
    </li>
</ul>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>Solar Batteries</span>
            </summary>

            <article class="px-4 pb-4">
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
        <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">4.7V 400mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">7.7V 1000mAh Lithium Ion+ Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">9.7V 30700mAh Lithium Ion Battery</a>
    </li>
</ul>
            </article>
        </details>
    </li>
    <li>
        <details class="group">
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                    </path>
                </svg>
                <span>Electric Vehicle Batteries</span>
            </summary>

            <article class="px-4 pb-4">
            <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
        <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">4.7V 400mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">7.7V 1000mAh Lithium Ion+ Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">3.7V 300mAh Lithium Ion Battery</a>
    </li>
    <li class="flex items-center space-x-3 rtl:space-x-reverse">
    <FaHandPointRight className='text-green-500'/>
    <a className='hover:text-teal-600 ' href="">9.7V 30700mAh Lithium Ion Battery</a>
    </li>
</ul>
            </article>
        </details>
    </li>
</ul>

{/* CONTACT US */}
<div className='py-8'>
                <div className='lg:max-w-2xl mx-auto divide-y shadow shadow-teal-600 rounded-xl hover:shadow-teal-800 hover:shadow'>
                <h3 className='text-xl  tracking-wide p-3 px-6 font-semibold'>Contact Us</h3>
                <div className='text-sm '>
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">Abhi Solution Technology</summary>
            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">Near GNI College Sohana, Barara, Ambala, Haryana - 133203, India</summary>
            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">Mobile : +91-9729312577, +91-8572860045</summary>
            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">Call Us : 08068499993 Ext : 696</summary>
            <hr class="h-px bg-gray-200 border-0 dark:bg-gray-200"></hr>
            <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">E-mail : saleast789@gmail.com</summary>
                        </div></div>
                        </div>
                        
                        </div>
                        </div>

                        {/* Impressive growth section */}
                        <div data-aos="flip-up"
    data-aos-offset="100"
    data-aos-delay="10"
    data-aos-duration="700"
    >
            <section class="py-5 leading-6 text-teal-900 sm:py-16 lg:py-10">
                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-xl text-center">
                        <h2 class="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">Impressive Growth in 2 Years</h2>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-6 divide-teal-200 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4 lg:divide-x">
                        <div class="border-b border-teal-200 py-10 px-6 lg:border-b-0">
                            <div class="flex items-center">
                                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                    <span class="absolute -top-4 h-2 w-full bg-teal-200"></span>
                                    328
                                </h3>
                                <span class="ml-3 text-base font-medium capitalize">Great Achievements</span>
                            </div>
                        </div>

                        <div class="border-b border-teal-200 py-10 px-6 lg:border-b-0">
                            <div class="flex items-center">
                                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                    <span class="absolute -top-4 h-2 w-full bg-teal-200"></span>
                                    16
                                </h3>
                                <span class="ml-3 text-base font-medium capitalize">Partnership</span>
                            </div>
                        </div>

                        <div class="border-b border-teal-200 py-10 px-6 lg:border-b-0">
                            <div class="flex items-center">
                                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                    <span class="absolute -top-4 h-2 w-full bg-teal-200"></span>
                                    41+
                                </h3>
                                <span class="ml-3 text-base font-medium capitalize">jobs created</span>
                            </div>
                        </div>

                        <div class="border-b border-teal-200 py-10 px-6 lg:border-b-0">
                            <div class="flex items-center">
                                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                                    <span class="absolute -top-4 h-2 w-full bg-teal-200"></span>
                                    99%
                                </h3>
                                <span class="ml-3 text-base font-medium capitalize">Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
</div>
        </>
    );
}

export default AboutUsPage;