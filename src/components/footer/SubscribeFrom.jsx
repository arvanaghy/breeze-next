"use client"
import React from 'react'

const SubscribeFrom = ({language}) => {
    const context = {}
  return (
    <form className="relative flex items-center justify-center w-full lg:gap-1 xl:gap-2 leading-loose
    xl:max-w-lg
    "
    onSubmit={(e) => e.preventDefault()}
    >
        <input
            type="text"
            placeholder="Enter email address "
            className="xl:px-4 xl:py-2
            lg:px-2 lg:py-1
            lg:text-sm
            xl:text-base
            bg-gray-100 rounded-md text-gray-900 w-full"
        />
        <button
            type="submit"
            className="absolute right-2
            bg-red-500
            rounded-md
            text-gray-100
            hover:text-gray-200
            hover:cursor-pointer
            hover:bg-red-700
            duration-300
            ease-in-out
            transition-all
            text-center
            px-5
            "
        >
            Subscribe
        </button>
    </form>
  )
}

export default SubscribeFrom