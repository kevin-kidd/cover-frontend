import { FunctionComponent } from "react";
import { useMenuStore } from "../../states/MenuState";
import { ListingTypeToggle } from "./ListingTypeToggle";
import { TokenTypeToggle } from "./TokenTypeToggle";

const DashboardHeader: FunctionComponent = () => {

  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  return (
      <div className="top-0 z-10 flex-shrink-0 flex h-auto border-b border-black mx-2">
        <button type="button" onClick={() => toggleMenu()} className="text-white focus:outline-none md:hidden ml-10">
          <span className="sr-only">Open sidebar</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1 flex px-4">
          <div className="flex-1 flex my-4 lg:mr-10 md:mr-2 sm:mr-6 justify-end">
            <TokenTypeToggle />
            <ListingTypeToggle />
            <button className="hidden lg:flex md:flex sm:flex xs:hidden rounded-full border border-[#b2bfcd] h-12 w-12 p-1 text-[#b2bfcd] hover:text-[#e0e5eb] hover:border-[#e0e5eb] transition duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  )
}

export default DashboardHeader