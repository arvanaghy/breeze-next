/* eslint-disable linebreak-style */
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LanguageSelect = ({ language = 'en' }) => {
    return (
        <div
            className="flex items-center justify-center w-full 
    
    lg:gap-1 xl:gap-2 leading-loose
    hover:text-red-500
    hover:cursor-pointer
    duration-300
    ease-in-out
    transition-all
    text-center
    ">
            <FontAwesomeIcon icon={faLanguage} className="
            lg:text-xs xl:text-sm" />
            <span className="hidden xl:block">English</span>
            <span className="hidden xl:block">Turkish</span>
        </div>
    )
}

export default LanguageSelect
