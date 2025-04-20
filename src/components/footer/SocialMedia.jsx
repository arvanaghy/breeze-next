import {
    faFacebookF,
    faGooglePlusG,
    faInstagram,
    faLinkedinIn,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SocialMedia = () => {
    return (
        <div className="flex flex-row justify-start items-center gap-6">
            <FontAwesomeIcon
                icon={faFacebookF}
                className="text-center border p-2 rounded-full
        hover:text-gray-600
        hover:border-gray-600
        hover:cursor-pointer
        duration-300
        ease-in-out
        transition-all
        "
            />
            <FontAwesomeIcon
                icon={faInstagram}
                className="text-center border p-2 rounded-full
                hover:text-gray-600
        hover:border-gray-600
        hover:cursor-pointer
        duration-300
        ease-in-out
        transition-all
        "
            />
            <FontAwesomeIcon
                icon={faXTwitter}
                className="text-center border p-2 rounded-full
                hover:text-gray-600
        hover:border-gray-600
        hover:cursor-pointer
        duration-300
        ease-in-out
        transition-all
        "
            />
            <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-center border p-2 rounded-full
                hover:text-gray-600
        hover:border-gray-600
        hover:cursor-pointer
        duration-300
        ease-in-out
        transition-all"
            />
            <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-center border p-2 rounded-full
                hover:text-gray-600
        hover:border-gray-600
        hover:cursor-pointer
        duration-300
        ease-in-out
        transition-all"
            />
            <FontAwesomeIcon
                icon={faGooglePlusG}
                className="text-center border p-2 rounded-full
                hover:text-gray-600
        hover:border-gray-600
        hover:cursor-pointer
        duration-300
        ease-in-out
        transition-all"
            />
        </div>
    )
}

export default SocialMedia
