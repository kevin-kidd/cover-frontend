import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";

export const ListingTypeToggle: FunctionComponent = () => {

    const listingToggleActive = useHomeStore((state) => state.listingToggleActive)
    const listingToggle = useHomeStore((state) => state.listingToggle)

    return (
      <>
        <div className="rounded-2xl bg-black flex border sm:border-2 border-black 4k:border-4 mr-2 sm:mr-6 lg:mr-12 h-full" onClick={() => listingToggle()}>
          <button 
            className={`w-1/2 group flex items-center ${listingToggleActive ? 'toggle-active bg-white' : null}`}
          >
            <a className={`text-tiny px-4 mr-1 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${listingToggleActive ? null : 'group-hover:text-white text-[#9196A8]'}`}>
              Lend
            </a>
          </button>
          <button 
            className={`w-1/2 group flex items-center ${listingToggleActive ? null : 'toggle-active bg-white'}`}
          >
            <a className={`text-tiny px-4 mr-1 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${listingToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
              Borrow
            </a>
          </button>
        </div>
      </>
    )
}