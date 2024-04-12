function Search(){
    return (
        <>
        <section class="mt-12 lg:mt-24">
    <div class="bg-teal-500 text-white">
        <div class="container mx-auto">
            <div class="flex flex-col items-center py-10 text-center lg:py-20">
                <div class="w-full px-4 lg:w-1/2 lg:px-0">
                    <div class="mb-8">
                        <h2 class="text-3xl lg:text-4xl font-bold mb-3">
                            Looking for a Battery?
                        </h2>
                        <p class="text-lg lg:text-xl opacity-80">
                            Search the Product Pages to find your desired batteries
                        </p>
                    </div>

                    <div class="mb-10">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center point  er-events-none">
                                <svg class="w-4 h-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                    </path>
                                </svg>
                            </div>

                            <form action="#" method="GET">
                                <input type="search" name="search" placeholder="Search here for Products" class="p-4 pl-10 text-gray-600 rounded w-full border-gray-100" />
                            </form>
                        </div>
                    </div>

                    <div class="text-lg">
                        <p>
                            Can't find what you're looking for ?  &nbsp;<br class="sm:hidden" />
                            <a href="#" class="border-b border-white pb-1">
                                Contact Us
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
}

export default Search;