import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";

export const ListingTypeToggle: FunctionComponent = () => {

    const listingToggleActive = useHomeStore((state) => state.listingToggleActive)
    const listingToggle = useHomeStore((state) => state.listingToggle)

    return (
      <>
        <div className="rounded-2xl bg-black lg:w-52 md:w-40 sm:w-40 w-32 h-12 p-3px w-full flex lg:mr-12 md:mr-2 mr-2" onClick={() => listingToggle()}>
          <button 
            className={`w-1/2 group ${listingToggleActive ? 'toggle-active bg-white' : null}`}
          >
            <a className={`text-sm mb-2 ${listingToggleActive ? null : 'group-hover:text-white text-[#9196A8]'}`}>
              Lend
            </a>
          </button>
          <button 
            className={`w-1/2 group ${listingToggleActive ? null : 'toggle-active bg-white'}`}
          >
            <a className={`text-sm mb-2 ${listingToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
              Borrow
            </a>
          </button>
        </div>
      </>
    )
}