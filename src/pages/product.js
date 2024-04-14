import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const product = ["https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
  "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
  "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
  "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
  "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
  "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
];


export default function Product() {

  const { catalaugeList } = useSelector((state) => state.Home)

  const type = ["Electric Vehicle Batteries", "Solar Batteries", "POS Machine Batteries", "GPS Batteries"]

  useEffect(() => {
    console.log(catalaugeList)
  }, [catalaugeList])

  const navigate= useNavigate()

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

      <section class="relative z-10 overflow-hidden px-3 py-7 bg-teal-600 lg:py-8">
        <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-3xl font-bold md:text-6xl text-white">25% OFF</p>
            <p className="text-3xl font-bold md:text-6xl">SUMMER SALE</p>
            <p className="mt-3 text-sm md:text-lg">For limited time only!</p>
            <div data-aos="zoom-out-up">
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-7 hover:bg-zinc-800">Buy Now</button>
            </div>
          </div>
          <div class="hidden sm:block order-1 lg:order-2">
            <img className="h-80 w-80 object-cover rounded-3xl lg:w-[220px] lg:h-[270px] hover:shadow" src="https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg" alt="" />
          </div>
        </div>
        <span className="absolute top-0 right-0 -z-10">
          <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6910)"></path><defs><linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-0 right-0 -z-10"><svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z" fill="url(#paint0_linear_971_6911)"></path><defs><linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse"><stop offset="0.520507" stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg></span><span class="absolute top-4 left-4 -z-10"><svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><circle cx="40.9984" cy="1.49626" r="1.49626" transform="rotate(90 40.9984 1.49626)" fill="white"></circle><circle cx="27.8304" cy="1.49626" r="1.49626" transform="rotate(90 27.8304 1.49626)" fill="white"></circle><circle cx="14.6644" cy="1.49626" r="1.49626" transform="rotate(90 14.6644 1.49626)" fill="white"></circle><circle cx="1.49642" cy="1.49626" r="1.49626" transform="rotate(90 1.49642 1.49626)" fill="white"></circle><circle cx="40.9984" cy="14.6642" r="1.49626" transform="rotate(90 40.9984 14.6642)" fill="white"></circle><circle cx="27.8304" cy="14.6642" r="1.49626" transform="rotate(90 27.8304 14.6642)" fill="white"></circle><circle cx="14.6644" cy="14.6642" r="1.49626" transform="rotate(90 14.6644 14.6642)" fill="white"></circle><circle cx="1.49642" cy="14.6642" r="1.49626" transform="rotate(90 1.49642 14.6642)" fill="white"></circle><circle cx="40.9984" cy="27.8302" r="1.49626" transform="rotate(90 40.9984 27.8302)" fill="white"></circle><circle cx="27.8304" cy="27.8302" r="1.49626" transform="rotate(90 27.8304 27.8302)" fill="white"></circle><circle cx="14.6644" cy="27.8302" r="1.49626" transform="rotate(90 14.6644 27.8302)" fill="white"></circle><circle cx="1.49642" cy="27.8302" r="1.49626" transform="rotate(90 1.49642 27.8302)" fill="white"></circle><circle cx="40.9984" cy="40.9982" r="1.49626" transform="rotate(90 40.9984 40.9982)" fill="white"></circle><circle cx="27.8304" cy="40.9963" r="1.49626" transform="rotate(90 27.8304 40.9963)" fill="white"></circle><circle cx="14.6644" cy="40.9982" r="1.49626" transform="rotate(90 14.6644 40.9982)" fill="white"></circle><circle cx="1.49642" cy="40.9963" r="1.49626" transform="rotate(90 1.49642 40.9963)" fill="white"></circle><circle cx="40.9984" cy="54.1642" r="1.49626" transform="rotate(90 40.9984 54.1642)" fill="white"></circle><circle cx="27.8304" cy="54.1642" r="1.49626" transform="rotate(90 27.8304 54.1642)" fill="white"></circle><circle cx="14.6644" cy="54.1642" r="1.49626" transform="rotate(90 14.6644 54.1642)" fill="white"></circle><circle cx="1.49642" cy="54.1642" r="1.49626" transform="rotate(90 1.49642 54.1642)" fill="white"></circle></g>
          </svg>
        </span>
      </section>

      <div className="max-w-7xl mx-auto p-8">
        <div class="flex items-center ">
          <span class="text-gray-900/40"><a href="/" class="hover:text-teal-600">Home</a> / <span href="/" class="text-black">Products</span></span>
        </div>


        {type.map((value, key) => {
          return (

            <section class="py-4">
              <p class="font-bold text-xl">
                <span class="text-teal-500 mx-1 font-extrabold text-3xl relative inline-block stroke-current">
                  {value}
                  <svg class="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
                  </svg>
                </span>
              </p>
              <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
              {catalaugeList.map((curElem,key) => {
                if(curElem?.product_category===value)
                 return (<>
                  <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
                    <div onClick={()=>{navigate(`/productpage/${curElem?.id}`)}}>
                      <div className="relative flex items-end overflow-hidden rounded-xl lg:h-64">
                        <div class="absolute border inset-0 z-10 bg-teal-800 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                          {/* <h1  class="tracking-wider">Title</h1>
                          <p  class="mx-auto">Description</p> */}
                          <table class="w-full text-sm text-left text-black-500">
                                <tbody>
                                    <tr class="bg-white border-b ">
                                        <td class="py-2 px-4 font-semibold">Size</td>
                                        <td class="py-2 px-4">35 X 53 X 6 Mm</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="py-2 px-4 font-semibold">Capacity</td>
                                        <td class="py-2 px-4">300mAh</td>
                                    </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="py-2 px-4 font-semibold">Feature</td>
                                        <td class="py-2 px-4">Long Life</td>
                                    </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="py-2 px-4 font-semibold">Country of Origin</td>
                                        <td class="py-2 px-4">India</td>
                                    </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="py-2 px-4 font-semibold">Brand Name</td>
                                        <td class="py-2 px-4">Abhi Solution Technology</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a href="#" class="relative">
                          <div class="flex flex-wrap content-center">
                            <img src={curElem?.thumbnail_url} key={key} class="mx-auto  " alt="Hotel Photo" />
                          </div>
                        </a>
                        
                        <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span class="text-slate-400 ml-1 text-sm">4.9</span>
                        </div>
                      </div>

                      <div class="mt-1 p-2">
                        <h2 class="text-slate-700">{curElem?.product_name}</h2>
                        {/* <p class="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p> */}
                        

                        <div class="mt-3 flex gap-4 items-end justify-between">
                          {/* <p>
                            <span class="text-lg font-bold text-teal-500">$850</span>
                            <span class="text-slate-400 teal-sm">/night</span>
                          </p> */}
                          <a className="px-3 py-2 min-w-[80px] text-center text-white bg-teal-600 border border-teal-600 rounded active:text-teal-500 hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring" href="/">Enquiry Now</a>
                          <div class="group inline-flex ">
                          <a class="px-3 py-2 min-w-[80px] text-center text-teal-600 border border-teal-600 rounded hover:bg-teal-600 hover:text-white active:bg-teal-500 focus:outline-none focus:ring" href="/">View More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </>);
              })}


              </div>
            </section>
          )
        })}
      </div> 
    </>
  );

}