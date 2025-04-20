/* eslint-disable react/self-closing-comp */
import React from 'react'
import SocialMedia from '@/components/footer/SocialMedia'
import SubscribeFrom from '@/components/footer/SubscribeFrom'
import Link from 'next/link'
import Image from 'next/image'
import TitoLogo from '../../../public/assets/images/tito.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <div
            className="w-full bg-gray-100 text-gray-900 
        dark:bg-gray-900 dark:text-gray-100">
            <div
                className="w-full grid grid-cols-12 items-start justify-center
            gap-4
            max-w-[90vw] mx-auto
            space-y-8 p-4
        ">
                <div
                    className="w-[80vw] mx-auto text-center col-span-12 h-16 bg-red-600 rounded-md
                shadow-lg shadow-gray-400 
                "></div>

                {/* about us */}
                <div className="col-span-12 xl:col-span-4 gap-y-6">
                    <h2 className="font-semibold text-xl leading-tight py-8">
                        About Us.
                    </h2>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet rem quod exercitationem laboriosam
                        cupiditate. Nemo autem, quam modi corporis esse optio
                        voluptates distinctio delectus dolore porro doloribus
                        aperiam dignissimos eligendi?
                    </p>
                    <div className="w-full py-6">
                        <SocialMedia />
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-2 gap-y-6">
                    <h2 className="font-semibold text-xl leading-tight py-8">
                        Useful Links
                    </h2>
                    <div className=" flex flex-col gap-y-4">
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            Store
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            About
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            Blogs
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-2 gap-y-6">
                    <h2 className="font-semibold text-xl leading-tight py-8">
                        Help?
                    </h2>
                    <div className=" flex flex-col gap-y-4">
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            FAQ
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            Terms and Conditions
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            Categories
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-x-2 hover:cursor-pointer hover:text-red-500 
                    hover:translate-x-2
                    duration-300 ease-in-out transition-all">
                            Brands
                        </Link>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4 gap-y-6 flex flex-col items-start justify-start">
                    <Image
                        src={TitoLogo}
                        alt="Tito Logo"
                        width={100}
                        height={100}
                        className="w-fit object-scale-down "
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="space-y-2">
                        <div className="">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-2">Istanbul , Turkey</span>
                        </div>
                        <div className="">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                            <span className="ml-2">+90 000 000 00</span>
                        </div>
                        <div className="">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="ml-2">Info[at]tito.com</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <SubscribeFrom language={'en'} />
                    </div>
                </div>
            </div>
            {/* copyright */}
            <div className="w-full p-4 bg-gray-800 ">
                <div
                    className="max-w-[90vw] mx-auto flex flex-col
                md:flex-row md:justify-between space-y-2">
                    <p className="text-center">
                        Copyright &copy; {new Date().getFullYear()} Tito. All
                        rights reserved
                    </p>
                    <div className="flex flex-row space-x-2 items-center justify-center">
                        <Link
                            href="#"
                            className="hover:text-red-500
                     duration-300 ease-in-out transition-all">
                            Terms of Use
                        </Link>
                        <span>|</span>
                        <Link href="#"  className="hover:text-red-500
                     duration-300 ease-in-out transition-all">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
