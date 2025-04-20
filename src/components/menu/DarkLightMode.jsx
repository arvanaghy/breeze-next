/* eslint-disable linebreak-style */
'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

const DarkLightMode = ({ language = 'en' }) => {
    return (
        <div className="flex items-center justify-center w-full 
        lg:gap-1
        xl:gap-2 leading-loose">
            <FontAwesomeIcon
                icon={faMoon}
                className="
                lg:p-1
                xl:p-1.5 bg-gray-100 rounded-full text-gray-900
         hover:bg-gray-500
         hover:text-gray-800
         hover:cursor-pointer
         duration-300
         ease-in-out
         transition-all
         "
            />
            <FontAwesomeIcon
                icon={faSun}
                className="   lg:p-1
                xl:p-1.5 bg-gray-100 rounded-full text-gray-900
         hover:bg-gray-500
         hover:text-gray-800
         hover:cursor-pointer
         duration-300
         ease-in-out
         transition-all
         "
            />
            <FontAwesomeIcon
                icon={faCircleHalfStroke}
                className="   lg:p-1
                xl:p-1.5 bg-gray-100 rounded-full text-gray-900
         hover:bg-gray-500
         hover:text-gray-800
         hover:cursor-pointer
         duration-300
         ease-in-out
         transition-all
         "
            />
        </div>
    )
}

export default DarkLightMode
