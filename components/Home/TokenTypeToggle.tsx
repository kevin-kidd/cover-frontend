import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";

export const TokenTypeToggle: FunctionComponent = () => {

  const tokenToggleActive = useHomeStore((state) => state.tokenToggleActive)
  const tokenToggle = useHomeStore((state) => state.tokenToggle)

    return (
      <>
        <div className="rounded-2xl bg-black flex border sm:border-2 border-black 4k:border-4 mr-2 sm:mr-6 lg:mr-12 h-full" onClick={() => tokenToggle()}>
          <button 
            className={`w-1/2 group flex items-center ${tokenToggleActive ? 'toggle-active bg-white' : null}`}
          >
            <a className={`text-tiny px-4 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${tokenToggleActive ? null : 'text-[#9196A8] group-hover:text-white'}`}>
              NFTs
            </a>
          </button>
          <button 
            className={`w-1/2 group flex items-center ${tokenToggleActive ? null : 'toggle-active bg-white'}`}
          >
            <a className={`text-tiny px-4 mr-2 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${tokenToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
              Tokens
            </a>
          </button>
        </div>
      </>
    )
}