import React, { useEffect, useState } from 'react'
import { BiSolidOffer } from 'react-icons/bi';
import { FaEnvelope } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductPage() {

    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [images, setImages] = useState({
        img1: "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2014_10_20_213904_7-4v-2600mah-lithium-ion-solar-battery-1699009054-7157549.jpeg",
        img2: "https://storage.googleapis.com/ev-public-bucket/images/2024_02_22%2013_57_00_744757_7-4v-4400mah-electric-vehicle-lithium-ion-battery-1699010061-7157589.jpeg",
        img3: "https://storage.googleapis.com/ev-public-bucket/images/2024_02_17%2009_43_32_329600_3-7v-800mah-electric-vehicle-lithium-ion-battery-1699010136-7157593.jpeg"
    })

  const { catalaugeList } = useSelector((state) => state.Home)
    useEffect(() => {
        if (catalaugeList.length > 0) {
          setProduct(catalaugeList.filter((value) => value.id.toString() === id)[0])
        }
        // getSingleProduct(`${API}?id=${id}`)
      }, [catalaugeList])

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


    const [activeImg, setActiveImage] = useState(images.img1)
    const [Model, setModel] = useState(popup);

    return (
        <>
            {/* Popup Banner */}

            {Model}

            {/* Image space */}
            <div className="max-w-7xl mx-auto p-8">
                <div class="flex items-center text-sm">
                    <span class="text-gray-900/40"><a href="/" class="hover:text-teal-600">Products</a> / <a href="/" class="hover:text-teal-600">GPS Batteries</a> / <span href="/" class="text-black">3.7V 300mAh Lithium Ion Battery</span></span>
                </div>

                <div className='flex flex-col justify-between lg:flex-row p-4 gap-10 '>
                    <div className='flex flex-col gap-6 lg:w-2/5'>
                        <img src={product?.thumbnail_url} alt="" className='w-full h-full aspect-square object-cover rounded-xl hover:shadow-lg' />
                        <div className='flex flex-row justify-between h-24'>
                            <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer shadow hover:shadow-lg border-[2px]' onClick={() => setActiveImage(images.img1)} />
                            <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer shadow hover:shadow-lg border-[2px]' onClick={() => setActiveImage(images.img2)} />
                            <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer shadow hover:shadow-lg border-[2px]' onClick={() => setActiveImage(images.img3)} />
                        </div>
                    </div>
                    {/* ABOUT */}
                    <div className='flex flex-col gap-4 lg:w-2/4'>
                        <div>
                            <span className='flex text-violet-600 font-semibold'>Get Best Price  &nbsp;<BiSolidOffer /></span>
                            <h1 className='text-3xl font-bold tracking-wide'>{product?.product_name}</h1>
                        </div>

                        <div class="flex items-center justify-between pt-1">
                            <span class="text-x">MOQ: <strong>{product?.moq} Piece</strong></span>
                            <div class="flex items-center">
                                <div class="flex space-x-px">
                                    <FaStar className='text-teal-500' />
                                    <FaStar className='text-teal-500' />
                                    <FaStar className='text-teal-500' />
                                    <FaStar className='text-teal-500' />
                                    <FaStarHalfAlt className='text-teal-500' />
                                </div>
                                <div class="pl-2 leading-none">
                                    4.6 / 5.0 <span class="text-gray-900/40"> (556)</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className='box-border p-2 hover:shadow-lg border-2'> */}
                        <table class="w-full text-sm text-left text-black-500">
                            <tbody>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Business Type</td>
                                    <td class="py-3 px-6">{product?.business_type}</td>
                                </tr>
                                <tr class="bg-white border-b">
                                    <td class="py-3 px-6">Material</td>
                                    <td class="py-3 px-6">{product?.material}</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Color</td>
                                    <td class="py-3 px-6">Yellow</td>
                                </tr>
                                <tr class="bg-white border-b ">
                                    <td class="py-3 px-6">Application</td>
                                    <td class="py-3 px-6">Commercial, Residential</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* </div> */}
                        <table class="w-full text-sm text-left text-black-500">
                            <p class="leading-relaxed px-3 text-x font-bold">Preferred Buyer From</p>
                            <tr class="bg-white border-b">
                                <td class="py-3 px-6">Location</td>
                                <td class="py-3 px-6">WorldWide</td>
                            </tr>
                        </table>



                        <div class="lg:flex lg:space-x-6 lg:space-y-0 space-y-6">
                            <button class="w-full py-4 text-sm inline-flex font-bold text-white bg-teal-500 rounded-sm px-14  hover:bg-teal-600">
                                <span className='ml-3 self-center fill-current'><FaMobileAlt /></span> &nbsp;
                                REQUEST TO CALL
                            </button>

                            <button class="w-full py-4 text-sm inline-flex font-bold text-white bg-teal-500 rounded-sm px-14 hover:bg-teal-600">
                                &nbsp;&nbsp;&nbsp;
                                <span className='ml-3 self-center fill-current'><FaEnvelope /></span> &nbsp;
                                SEND ENQUIRY
                            </button>
                        </div>
                        <div class="pt-2">
                            Free 2-5 day shipping • Tool-free assembly • 30-day trial
                        </div>
                        <div class="flex items-center justify-between pt-2">
                            <button class="flex items-center px-4 py-2 space-x-2 text-teal-500 hover:text-teal-600">
                                <FaRegHeart class="stroke-current" />
                                <span>Add to Wishlist</span>
                            </button>
                            <div class="flex items-center space-x-6">
                                <button><FaFacebook class="w-5 h-5 hover:text-teal-500" /></button>
                                <button><FaTwitter class="w-5 h-5 hover:text-teal-500" /></button>
                                <button><FaPinterest class="w-5 h-5 hover:text-teal-500" /></button>
                                <button><FaInstagram class="w-5 h-5 hover:text-teal-500" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pRODUCT dESCRIPTION */}


            <div className="max-w-7xl mx-auto p-8">
                <div className='box-border p-2 hover:shadow-lg border-2 rounded-md'>
                    <h2 className='text-2xl  tracking-wide p-3 px-6'>Product Details</h2>
                    <div className='flex flex-col justify-between lg:flex-row p-4 lg:gap-10 sm:gap-10'>
                        <div className='flex flex-col gap-6 lg:w-2/4'>
                            <table class="w-full text-sm text-left text-black-500">
                                <tbody>
                                    <tr class="bg-white border-b ">
                                        <td class="py-3 px-6">Size</td>
                                        <td class="py-3 px-6">35 X 53 X 6 Mm</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="py-3 px-6">Capacity</td>
                                        <td class="py-3 px-6">300mAh</td>
                                    </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="py-3 px-6">Country of Origin</td>
                                        <td class="py-3 px-6">India</td>
                                    </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="py-3 px-6">Brand Name</td>
                                        <td class="py-3 px-6">Abhi Solution Technology</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='flex flex-col  gap-6 lg:w-2/4'>
                            <table class="w-full text-sm text-left text-black-500">
                                <tbody>
                                    <tr class="bg-white border-b ">
                                        <td class="py-3 px-6">Feature</td>
                                        <td class="py-3 px-6">Long Life</td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="py-3 px-6">Type</td>
                                        <td class="py-3 px-6">Rechargeable</td>
                                    </tr>
                                    <tr class="bg-white border-b ">
                                        <td class="py-3 px-6">Life Cycles</td>
                                        <td class="py-3 px-6">600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <a target="_blank" rel="noreferrer" href="https://example.com"
                            class="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-teal-100 px-7 py-2 transition-all hover:bg-teal-200">
                            <p class="text-sm font-semibold text-teal-700"> 😊 Yes! I am Interested</p>
                        </a>
                        {/* <button class=" py-4 text-sm inline-flex font-bold text-white bg-teal-500 rounded-sm px-14  hover:bg-teal-600">
                <span className='ml-3 self-center fill-current'><FaMobileAlt /></span> &nbsp;
                
              </button> */}
                    </div>

                </div>
            </div>
            {/* Product Description End */}
            {/* 1000's Bing Brand Trust Us */}
            <section class="py-12 bg-white sm:py-16 lg:py-20">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="xl:flex xl:items-center xl:justify-between">
                        <h2 class="text-xl font-bold text-center text-gray-400 xl:text-left font-pj">1000+ Big brands trust us</h2>

                        <div class="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
                            <img class="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg" alt="" />
                            <img class="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg" alt="" />
                            <img class="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg" alt="" />
                            <img class="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* END of 1000's Bing Brand Trust Us */}

            
            <div className="max-w-7xl mx-auto p-8">
                <div className='box-border p-2 hover:shadow-lg border-2 rounded-md xl:flex xl:items-center xl:justify-between'>
                <div className='flex flex-col justify-between lg:flex-row p-4 lg:gap-10 sm:gap-10'>
                <div className='flex flex-col gap-6 lg:w-2/4 justify-between lg:flex-row lg:items-center'>
                    <h3 className='text-2xl  tracking-wide p-3 px-6 xl:py-16'>Looking for "3.7V 1100mAh Lithium Ion Battery" ?</h3>
                    </div>
                    <div className='flex flex-col gap-6 lg:w-2/4'>
<form class="px-4 py-4">
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{10}" name="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="number" min="1" max="100" name="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-teal-600 peer" placeholder=" " required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
    </div>
  </div>
  <div class="flex gap-x-6 p-2">
  <div class="flex">
    <span className='text-sm text-gray-500'>Purpose of Requirement</span>
</div>
  <div class="flex">
    <input type="radio" name="hs-radio-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-group-2"/>
    <label for="hs-radio-group-2" class="text-sm text-gray-500 ms-2">Reselling</label>
  </div>

  <div class="flex">
    <input type="radio" name="hs-radio-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-group-3" />
    <label for="hs-radio-group-3" class="text-sm text-gray-500 ms-2">End Use</label>
  </div>
</div>
  <div class="grid md:grid-cols-1 w-full mb-5 py-2 group">
    <label className='text-sm text-gray-500'>Requirement Details 👇</label>
  <textarea class="focus:outline-none focus:ring-0 focus:border-teal-600 peer caret-blue-500 focus:caret-teal-500 border-2 resize-y rounded-md"></textarea>
  </div>
  
  <button type="submit" class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Send Enquiry 📨 </button>
</form></div></div>
</div>
</div>


        </>
    );
}

export default ProductPage;