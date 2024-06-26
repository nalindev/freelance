import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from "../assets/images/Logo.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/aboutus', current: false },
    { name: 'Products', href: '/product', current: false },
    { name: 'ContactUs', href: '/contact', current: false },
]



export default function Header() {
    const navigate = useNavigate()
    const [navigationItems, setNavigationItems] = useState(navigation)

    const location = useLocation()
    useEffect(()=>{
        const updatedItems = navigationItems.map(item => ({
            ...item,
            current: item.href === location.pathname
        }));
        setNavigationItems(updatedItems)    
    },[location])


    const handleItemClick = (clickedItem) => {
        const updatedItems = navigationItems.map(item => ({
            ...item,
            current: item.name === clickedItem.name
        }));
        setNavigationItems(updatedItems);
        navigate(clickedItem.href);
    };

    return (
        <Disclosure as="nav" className="bg-[darkslategray]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src={Logo}
                                        alt="Your Company"
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigationItems.map((item) => (
                                            <div
                                                key={item.name}
                                                onClick={()=>handleItemClick(item)}
                                                className={item.current ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                                            >
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    onClick={() => {
                                        navigate(item.href)
                                    }}
                                    className={
                                        item.current ? 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}