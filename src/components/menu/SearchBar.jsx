/* eslint-disable linebreak-style */
'use client'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = ({ language = 'en' }) => {
    const content = {}
    return (
        <form className="relative flex items-center justify-center w-full lg:gap-1 xl:gap-2 leading-loose">
            <input
                type="text"
                placeholder="Search..."
                className="xl:px-4 xl:py-2
                lg:px-2 lg:py-1
                lg:text-sm
                xl:text-base
                bg-gray-100 rounded-full text-gray-900 w-full"
            />
            <button
                type="submit"
                className="absolute right-3 text-gray-900
                hover:text-gray-600
                duration-300
                ease-in-out
                transition-all
                ">
                <FontAwesomeIcon icon={faSearch}
                className='
                lg:text-sm
                xl:text-base'
                />
            </button>
        </form>
    )
}

export default SearchBar
