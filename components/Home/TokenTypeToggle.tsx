import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";

export const TokenTypeToggle: FunctionComponent = () => {

  const tokenToggleActive = useHomeStore((state) => state.tokenToggleActive)
  const tokenToggle = useHomeStore((state) => state.tokenToggle)

    return (
      <>
        <div className="rounded-2xl bg-black sm:w-52 sm:h-12 h-10 p-3px w-32 flex lg:mr-12 md:mr-2 mr-2" onClick={() => tokenToggle()}>
          <button 
            className={`w-1/2 group pb-1 sm:pb-0 ${tokenToggleActive ? 'toggle-active bg-white' : null}`}
          >
            <a className={`text-tiny sm:text-kindasmall ${tokenToggleActive ? null : 'text-[#9196A8] group-hover:text-white'}`}>
              NFTs
            </a>
          </button>
          <button 
            className={`w-1/2 group pb-1 sm:pb-0 ${tokenToggleActive ? null : 'toggle-active bg-white'}`}
          >
            <a className={`text-tiny sm:text-kindasmall ${tokenToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
              Tokens
            </a>
          </button>
        </div>
      </>
    )
}