import { FunctionComponent, useState } from "react";
import { useRecoilState } from "recoil";
import { listingToggleState } from "../../atoms/HomeState";

export const ListingTypeToggle: FunctionComponent = () => {

    const [listingToggle, setListingToggle] = useRecoilState(listingToggleState)

    return (
      <>
        <div className="rounded-2xl bg-black lg:w-52 md:w-52 sm:w-52 w-32 h-12 p-3px w-full flex lg:mr-10 md:mr-10 sm:mr-10 mr-2">
          <button 
            className={`w-1/2 group ${listingToggle === 0 ? 'toggle-active bg-white' : ''}`}
            onClick={() => setListingToggle(0)}
          >
            <a className={`text-sm mb-2 ${listingToggle === 0 ? '' : 'group-hover:text-white text-[#9196A8]'}`}>
              Lend
            </a>
          </button>
          <button 
            className={`w-1/2 group ${listingToggle === 1 ? 'toggle-active bg-white' : ''}`}
            onClick={() => setListingToggle(1)}
          >
            <a className={`text-sm mb-2 ${listingToggle === 1 ? '' : 'text-[#9196A8] group-hover:text-white'}`}>
              Borrow
            </a>
          </button>
        </div>
      </>
    )
}