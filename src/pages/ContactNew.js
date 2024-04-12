import React, { useEffect, useState } from 'react'

function ContactNew() {
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

    const cookie_popup = <div class="fixed bottom-0 right-0 mb-4 mr-4 w-64">
        <div class="bg-white rounded-lg shadow-lg p-4">
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <img src="https://www.svgrepo.com/show/401340/cookie.svg" alt="Cookie" class="h-6 w-6 mr-2" />
                    <span class="text-gray-700 font-bold text-sm">Cookie Policy</span>
                </div>
                <button class="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setCookie("")}>
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <p class="text-gray-600 text-sm">
                We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of
                cookies.
            </p>
            <button class="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded" onClick={() => setCookie("")}>
                Accept
            </button>
        </div>
    </div>;

    const [Model, setModel] = useState(popup);
    const [cookie, setCookie] = useState(cookie_popup);

    return (
        <>
        {Model}
        <div className="container mx-auto my-12 h-auto">
        <div class="gx uk cxd">
   <h2 class="avs awc aww axu">Let’s talk about your project</h2>
   <p class="lb avy awq axr">We help companies and individuals build out their brand guidelines.</p>
   <div class="la lx yr zm ccd cyy">
      <form action="#" method="POST" class="cxo">
         <div class="mb yg aaj aau caq">
            <div>
               <label for="first-name" class="lu avz awf awo axu">First name</label>
               <div class="lc"><input type="text" name="first-name" id="first-name" autocomplete="given-name" class="lu tn adu afa arf aru axu bbm bbs bbw bce bgc bnd bne bnq cia cic" /></div>
            </div>
            <div>
               <label for="last-name" class="lu avz awf awo axu">Last name</label>
               <div class="lc"><input type="text" name="last-name" id="last-name" autocomplete="family-name" class="lu tn adu afa arf aru axu bbm bbs bbw bce bgc bnd bne bnq cia cic" /></div>
            </div>
            <div>
               <label for="budget" class="lu avz awf awo axu">Budget</label>
               <div class="lc"><input id="budget" name="budget" type="text" class="lu tn adu afa arf aru axu bbm bbs bbw bce bgc bnd bne bnq cia cic" /></div>
            </div>
            <div>
               <label for="website" class="lu avz awf awo axu">Website</label>
               <div class="lc"><input type="url" name="website" id="website" class="lu tn adu afa arf aru axu bbm bbs bbw bce bgc bnd bne bnq cia cic" /></div>
            </div>
            <div class="buc">
               <label for="message" class="lu avz awf awo axu">Message</label>
               <div class="lc"><textarea id="message" name="message" rows="4" class="lu tn adu afa arf aru axu bbm bbs bbw bce bgc bnd bne bnq cia cic"></textarea></div>
            </div>
         </div>
         <div class="kw"><button type="submit" class="lu tn adu ajp arf arv avk avz awf bag bbm bir box boy bpa bph">Let’s talk</button></div>
         <p class="lh avz awo axq">By submitting this form, I agree to the <a href="#" class="awf ayg">privacy&nbsp;policy</a>.</p>
      </form>
      <div class="cuq cwr cxp">
         <img class="nj tm" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
         <figure class="kw">
            <blockquote class="avy awf awq axu">
               <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
            </blockquote>
            <figcaption class="kw lx aai">
               <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=96&amp;h=96&amp;q=80" alt="" class="nj rl uo ads aio" />
               <div>
                  <div class="avx awf axu">Brenna Goyette</div>
                  <div class="avz awo axr">CEO of Workcation</div>
               </div>
            </figcaption>
         </figure>
      </div>
   </div>
</div>
</div>
{cookie}
        </>
    );
}

export default ContactNew;