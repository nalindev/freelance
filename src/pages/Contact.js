import React, { useState } from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  const formTab = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `Near GNI College Sohana, Barara, Ambala, Haryana - 133203, India`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+91-9729312577`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `saleast789@gmail.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      desription: "yoursite.com",
    },
  ];

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

 const [modal,setModel] = useState(popup)

  return (
    <>
    {modal}
      <div style={{width:"90%", margin:"auto"}}>
        {" "}
        <div className="md:w-96 mx-auto text-center my-24">
          <div className="text-2xl font-bold">Contact Me</div>
          <div className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem sint, magni magnam impedit dignissimos rerum
            modi error ex libero corrupti ab, numquam, eius maxime! Soluta quos
            culpa possimus tempora.
          </div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{width:"90%", margin:"auto", marginBottom:"1%"}} className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
              {formTab.map((x, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">What is your name?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  "
                    />
                  </div>
                );
              })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full   p-4">
          <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
