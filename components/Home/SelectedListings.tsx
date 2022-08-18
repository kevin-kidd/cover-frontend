import {FunctionComponent, useEffect, useState} from "react";
import { useHomeStore } from "../../stores/Home";
import exampleListings from "../../exampleListings.json";
import { ListingCard } from "./ListingCard";
import Typed from "react-typed";

const PrincipalDenomBox: FunctionComponent = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);

    let typedInstance;

    return (
        <div className="search-box w-full bg-[#0E1E2C] group hover:shadow-lg">
            <div className="inline-flex flex w-full h-full items-center ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="big:h-6 big:h-12 lg:h-5 lg:w-5 sm:h-4 sm:w-4 h-3 w-3" fill="#B2BFCD" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
                { tooltipOpen ?
                    <Typed
                        typedRef={(typed) => { typedInstance = typed }}
                        strings={['Here is an example tooltip.', 'Principal denomination']}
                        className="text-[#B2BFCD] group-hover:text-[#c1ccd7] text-tiny sm:text-kindasmaller lg:text-kindasmall 4k:text-2xl w-full px-3"
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
};

const CollateralDenomBox: FunctionComponent = () => {

    const [tooltipOpen, setTooltipOpen] = useState(false);

    let typedInstance;

    return (
        <div className="search-box w-full bg-[#0E1E2C] group hover:shadow-lg">
            <div className="inline-flex flex w-full h-full items-center ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="big:h-6 big:h-12 lg:h-5 lg:w-5 sm:h-4 sm:w-4 h-3 w-3" fill="#B2BFCD" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
                { tooltipOpen ?
                    <Typed
                        typedRef={(typed) => { typedInstance = typed }}
                        strings={['Here is an example tooltip.', 'Principal denomination']}
                        className="text-[#B2BFCD] group-hover:text-[#c1ccd7] text-tiny sm:text-kindasmaller lg:text-kindasmall 4k:text-2xl w-full px-3"
                        onComplete={() => setTooltipOpen(!tooltipOpen)}
                        typeSpeed={20}
                        backSpeed={30}
                    />
                    :
                    <input type="text" maxLength={12} className="placeholder-[#B2BFCD] text-[#c1ccd7] text-tiny sm:text-kindasmaller lg:text-kindasmall 4k:text-2xl group-hover:placeholder-[#c1ccd7] focus:ring-0 border-0 w-full bg-transparent" placeholder="Principal denomination" />
                }
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setTooltipOpen(!tooltipOpen)}
                    className="absolute right-4 big:h-6 4k:h-12 lg:h-4 lg:w-4 h-3 w-3 hover:cursor-pointer"
                    fill="#B2BFCD" viewBox="0 0 512 512"
                >
                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"/>
                </svg>
            </div>
        </div>
    )
};


const AdvancedButton: FunctionComponent = () => {
    return (
        <button className="w-fit bg-[#FF6767] p-4 lg:p-5 4k:p-8 big:p-6 gap-2 flex items-center rounded-lg text-white default:text-base big:text-lg 4k:text-2xl desktop:text-kindasmall text-tiny hover:bg-[#ff6f6f]">
            <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-4 lg:h-4 sm:w-3 sm:h-3 w-2 h-2" fill="white" viewBox="0 0 512 512">
                <path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"/>
            </svg>
            Advanced
        </button>
    )
};

const SectionTitle: FunctionComponent = () => {
  const loanType = useHomeStore((state) => state.listingToggleActive);
  const tokenType = useHomeStore((state) => state.tokenToggleActive);

  let title: string;

  if(loanType && tokenType) title = "NFT Lending";
  else if(!loanType && tokenType) title = "NFT Borrowing";
  else if(loanType && !tokenType) title = "Token Lending";
  else if(!loanType && !tokenType) title = "Token Borrowing";

  return (
      <div className="flex justify-between items-end py-4">
          <h1 className="text-tiny md:text-base xl:text-lg font-medium text-white">{ title } Listings</h1>
          <a href="#" className="mt-1 font-medium text-red-500 transition duration-150 text-sm lg:text-tiny 2xl:text-base">
              All Listings
          </a>
      </div>
  )
};

const SectionHeader: FunctionComponent = () => {
  return (
      <>
        {/* Mobile */}
        <div className="sm:hidden grid grid-rows-2 grid-cols-3 grid-flow-col justify-center items-center w-full mt-4">
          <div className="row-span-1 col-span-2">
            <PrincipalDenomBox />
          </div>
          <div className="row-span-1 col-span-2">
            <CollateralDenomBox />
          </div>
          <div className="row-span-2 col-span-1 flex justify-center">
            <AdvancedButton />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden sm:grid sm:grid-cols-5 justify-center gap-x-2 items-center w-full mt-2">
            <div className="w-full col-span-2 flex justify-self-center xl:w-5/6 sm:h-10 h-8">
              <PrincipalDenomBox />
            </div>
          <div className="w-full col-span-2 xl:w-5/6 sm:h-10 h-8">
              <CollateralDenomBox />
            </div>
          <div className="col-span-1 flex">
            <AdvancedButton />
          </div>
        </div>
      </>
  )
};


export const SelectedListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.selectedListings);
  const setSelectedListings = useHomeStore((state) => state.setSelectedListings);

  useEffect(() => {
    setTimeout(() => {
      setSelectedListings(exampleListings.lend.nft);
    }, 5000)
  }, [setSelectedListings]);

  return (
    <div className="border-t border-black pb-8 pt-4 w-full">
      <SectionTitle />
      <SectionHeader />
        <div className="
            justify-center items-center w-full my-8
            grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4
            gap-x-2 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10
        ">
        {
          listings.map((ele, index) => (
            <ListingCard key={'listing-' + index} index={index} listing={ele} />
          ))
        }
      </div>
    </div>
  )
};