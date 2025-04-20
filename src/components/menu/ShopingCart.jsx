/* eslint-disable linebreak-style */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ShopingCart = ({ language }) => {
    const content = {}

    return (
        <div
            className="flex items-center justify-center w-full 
            lg:gap-1
            xl:gap-2 leading-loose
    hover:text-red-500
    hover:cursor-pointer
    duration-300
    ease-in-out
    transition-all
    text-center
    ">
            <FontAwesomeIcon icon={faCartShopping} className='text-center 
            lg:text-xs
            xl:text-sm
            ' />
        </div>
    )
}

export default ShopingCart
