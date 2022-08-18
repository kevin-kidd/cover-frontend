import { FunctionComponent } from "react";
import { useRecoilState } from "recoil";
import { tokenToggleState } from "../../atoms/HomeState";

export const TokenTypeToggle: FunctionComponent = () => {

    const [tokenToggle, setTokenToggle] = useRecoilState(tokenToggleState)

    return (
      <>
        <div className="rounded-2xl bg-black lg:w-52 md:w-52 sm:w-52 w-32 h-12 p-3px w-full flex lg:mr-10 md:mr-10 sm:mr-10 mr-2">
          <button 
            className={`w-1/2 group ${tokenToggle === 0 ? 'toggle-active bg-white' : ''}`}
            onClick={() => setTokenToggle(0)}
          >
            <a className={`text-sm mb-2 ${tokenToggle === 0 ? '' : 'text-[#9196A8] group-hover:text-white'}`}>
              NFTs
            </a>
          </button>
          <button 
            className={`w-1/2 group ${tokenToggle === 1 ? 'toggle-active bg-white' : ''}`}
            onClick={() => setTokenToggle(1)}
          >
            <a className={`text-sm mb-2 ${tokenToggle === 1 ? '' : 'text-[#9196A8] group-hover:text-white'}`}>
              Tokens
            </a>
          </button>
        </div>
      </>
    )
}