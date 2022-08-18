import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";

export const ListingTypeToggle: FunctionComponent = () => {

    const listingToggleActive = useHomeStore((state) => state.listingToggleActive)
    const listingToggle = useHomeStore((state) => state.listingToggle)

    return (
      <>
        <div className="rounded-2xl bg-black sm:w-52 sm:h-12 h-10 p-3px w-32 flex lg:mr-12 md:mr-2 mr-2" onClick={() => listingToggle()}>
          <button 
            className={`w-1/2 group pb-1 sm:pb-0 ${listingToggleActive ? 'toggle-active bg-white' : null}`}
          >
            <a className={`text-tiny sm:text-kindasmall ${listingToggleActive ? null : 'group-hover:text-white text-[#9196A8]'}`}>
              Lend
            </a>
          </button>
          <button 
            className={`w-1/2 group pb-1 sm:pb-0 ${listingToggleActive ? null : 'toggle-active bg-white'}`}
          >
            <a className={`text-tiny sm:text-kindasmall ${listingToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
              Borrow
            </a>
          </button>
        </div>
      </>
    )
}