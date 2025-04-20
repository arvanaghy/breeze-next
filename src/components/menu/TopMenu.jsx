/* eslint-disable linebreak-style */
import Image from 'next/image'
import React from 'react'
import TitoLogo from '../../../public/assets/images/tito.png'
import DarkLightMode from '@/components/menu/DarkLightMode'
import LoginLinks from '@/app/LoginLinks'
import ShopingCart from '@/components/menu/ShopingCart'
import LanguageSelect from '@/components/menu/LanguageSelect'
import SearchBar from '@/components/menu/SearchBar'
import Link from 'next/link'

const TopMenu = ({ language = 'en' }) => {
    const content = {}

    return (
        <div
            className="
    w-full
    p-2
    grid grid-cols-12
    lg:gap-2
    xl:gap-4 items-center justify-center
    bg-gray-100 text-gray-900    
    dark:bg-gray-900 dark:text-gray-100 ">
            {/* logo */}
            <div className="col-span-1">
                <Image
                    src={TitoLogo}
                    alt="Tito Logo"
                    width={100}
                    height={100}
                    className="w-full object-scale-down "
                />
            </div>
            {/* search */}
            <div className="col-span-3 items-center justify-center">
                <SearchBar language={language} />
            </div>
            {/* menu */}
            <div className="col-span-4 items-center justify-center lg:gap-x- xl:gap-x-2 grid grid-cols-5">
                <Link
                    href={'/store'}
                    className="block
                font-extrabold hover:text-red-500
                hover:cursor-pointer
                duration-300
                ease-in-out
                transition-all
                lg:text-sm
                xl:text-base
                text-center
                ">
                    STORE
                </Link>
                <Link
                    href={'/offers'}
                    className="block
                font-extrabold hover:text-red-500
                hover:cursor-pointer
                duration-300
                ease-in-out
                transition-all
                lg:text-sm
                xl:text-base
                text-center
                ">
                    OFFERS
                </Link>
                <Link
                    href={'/about'}
                    className="block
                font-extrabold hover:text-red-500
                hover:cursor-pointer
                duration-300
                ease-in-out
                transition-all
                lg:text-sm
                xl:text-base
                text-center
                ">
                    ABOUT
                </Link>
                <Link
                    href={'/contact'}
                    className="block
                font-extrabold hover:text-red-500
                hover:cursor-pointer
                duration-300
                ease-in-out
                transition-all
                lg:text-sm
                xl:text-base
                text-center
                ">
                    CONTACT
                </Link>
                <Link
                    href={'/blog'}
                    className="block
                font-extrabold hover:text-red-500
                hover:cursor-pointer
                duration-300
                ease-in-out
                transition-all
                lg:text-sm
                xl:text-base
                text-center
                ">
                    BLOG
                </Link>
            </div>

            {/* login */}
            <div className="col-span-1 items-center justify-center">
                <LoginLinks language={'en'} />
            </div>
            {/* cart */}
            <div className="col-span-1 items-center justify-center">
                <ShopingCart language={language} />
            </div>
            {/* language */}
            <div className="col-span-1 items-center justify-center ">
                <LanguageSelect language={language} />
            </div>
            {/* mode */}
            <div className="col-span-1  items-center justify-center ">
                <DarkLightMode language={language} />
            </div>
        </div>
    )
}

export default TopMenu
