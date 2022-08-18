import { FunctionComponent, useState, useRef } from "react";
import { useMenuStore } from "../../states/MenuState";
import { ListingTypeToggle } from "./ListingTypeToggle";
import { TokenTypeToggle } from "./TokenTypeToggle";
import { CogIcon } from '@heroicons/react/solid'

const DashboardHeader: FunctionComponent = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  const darkHeader = true


  return (
      <div className={`top-0 z-20 sticky transition duration-300 flex ${darkHeader ? "bg-[#1A2128] shadow-2xl" : "bg-transparent"}`}>
        <button type="button" onClick={() => toggleMenu()} className="text-white focus:outline-none lg:hidden ml-6">
          <span className="sr-only">Open sidebar</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1 flex pl-4 sm:px-4 w-full">
          <div className="
            flex-1 flex my-4 justify-end items-center 
            big:my-8 4k:my-10 lg:mr-10 md:mr-2 sm:mr-6 
            h-8 lg:h-12 big:h-20 4k:h-28
            ">
            <TokenTypeToggle />
            <ListingTypeToggle />
            <button className="hidden sm:flex rounded-full border border-[#b2bfcd] w-12 h-full big:w-20 4k:w-28 p-1 text-[#b2bfcd] hover:text-[#e0e5eb] hover:border-[#e0e5eb] transition duration-150">
              <CogIcon className="h-full w-full"/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default DashboardHeader