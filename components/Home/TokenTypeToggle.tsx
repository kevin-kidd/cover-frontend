import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";

export const TokenTypeToggle: FunctionComponent = () => {

  const tokenToggleActive = useHomeStore((state) => state.tokenToggleActive)
  const tokenToggle = useHomeStore((state) => state.tokenToggle)

    return (
      <>
        <div className="rounded-2xl bg-black lg:w-52 md:w-52 sm:w-52 w-32 h-12 p-3px w-full flex mr-10" onClick={() => tokenToggle()}>
          <button 
            className={`w-1/2 group ${tokenToggleActive ? 'toggle-active bg-white' : null}`}
          >
            <a className={`text-sm mb-2 ${tokenToggleActive ? null : 'text-[#9196A8] group-hover:text-white'}`}>
              NFTs
            </a>
          </button>
          <button 
            className={`w-1/2 group ${tokenToggleActive ? null : 'toggle-active bg-white'}`}
          >
            <a className={`text-sm mb-2 ${tokenToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
              Tokens
            </a>
          </button>
        </div>
      </>
    )
}