import { FunctionComponent, useState, useEffect } from "react";
import Typed from "react-typed"


export const PrincipalDenomBox: FunctionComponent = () => {

  const [tooltipOpen, setTooltipOpen] = useState(false)

  let typedInstance

  return (
    <div className="search-box w-full sm:w-5/6 sm:h-10 big:h-12 4k:h-16 h-8 bg-[#0E1E2C] group hover:shadow-lg">
      <div className="inline-flex flex w-full h-full items-center ml-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="big:h-6 big:h-12 lg:h-5 lg:w-5 sm:h-4 sm:w-4 h-3 w-3" fill="#B2BFCD" viewBox="0 0 512 512">
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
        </svg>
        { tooltipOpen ? 
          <Typed
            typedRef={(typed) => { typedInstance = typed }}
            strings={['Here is an example tooltip.', 'Principal denomination']}
            className="text-[#c1ccd7] text-tiny sm:text-kindasmaller lg:text-kindasmall 4k:text-2xl w-full px-3"
            onComplete={() => setTooltipOpen(false)}
            typeSpeed={20}
            backSpeed={30}
          />
          :
          <input type="text" maxLength={12} className="placeholder-[#B2BFCD] text-[#c1ccd7] text-tiny sm:text-kindasmaller lg:text-kindasmall 4k:text-2xl group-hover:placeholder-[#c1ccd7] focus:ring-0 border-0 w-full bg-transparent" placeholder="Principal denomination" />
        }
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setTooltipOpen(true)}
          className="absolute right-4 big:h-6 4k:h-12 lg:h-4 lg:w-4 h-3 w-3 hover:cursor-pointer" 
          fill="#B2BFCD" viewBox="0 0 512 512"
        >
          <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"/>
        </svg>
      </div>
    </div>
  )
}