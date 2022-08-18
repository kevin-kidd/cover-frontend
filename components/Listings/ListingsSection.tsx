import { FunctionComponent, useState } from "react";
import { useHomeStore } from "../../stores/HomeStore";
import { Card } from "./Card";
import Typed from "react-typed";
import {Listing} from "../../types/general";
import {usePersistentStore} from "../../stores/PersistentStore";

const DenomSearchBox: FunctionComponent<{type: string}> = ({ type }) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    let typedInstance;

    let placeholder: string, tooltip: string;
    if(type === "principal") {
        placeholder = "Principal Denomination";
        tooltip = "Explanation for principal denom."
    } else {
        placeholder = "Collateral Denomination";
        tooltip = "Explanation for collateral denom."
    }

    return (
        <div className="search-box w-full h-8 bg-[#0E1E2C] group">
            <div className="inline-flex flex w-full h-full items-center ml-3 sm:ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-full py-2" fill="#B2BFCD" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
                { tooltipOpen ?
                    <Typed
                        typedRef={(typed) => { typedInstance = typed }}
                        strings={[tooltip, placeholder]}
                        className="text-[#B2BFCD] text-xs sm:text-sm w-full px-3"
                        onComplete={() => setTooltipOpen(!tooltipOpen)}
                        typeSpeed={25}
                        backSpeed={20}
                    />
                    :
                    <input type="text" maxLength={12} placeholder={placeholder} tabIndex={-1}
                       className="placeholder-[#B2BFCD] text-[#c1ccd7] text-xs sm:text-sm focus:ring-0 border-0 w-full bg-transparent"
                    />
                }
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setTooltipOpen(!tooltipOpen)}
                    className="hidden sm:block absolute right-4 w-auto h-full py-2 hover:cursor-pointer"
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
        <button className="w-fit bg-[#FF6767] py-5 px-6 gap-2 flex items-center rounded-xl text-white text-sm font-light hover:bg-[#ff6f6f]">
            <svg viewBox="0 0 21 22" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5353 7.61002V14.4606" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.964 11.0353H7.10638" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      d="M1.20416 11.0353C1.20416 4.03746 3.53745 1.70417 10.5353 1.70417C17.5332 1.70417 19.8664 4.03746 19.8664 11.0353C19.8664 18.0332 17.5332 20.3665 10.5353 20.3665C3.53745 20.3665 1.20416 18.0332 1.20416 11.0353Z"
                />
            </svg>
            Advanced
        </button>
    )
};

const SectionTitle: FunctionComponent<{title?: string}> = ({ title }) => {
  const tokenToggle = usePersistentStore((state) => state.config.toggles.tokenToggle);
  const listingToggle = usePersistentStore((state) => state.config.toggles.listingToggle);

  if(title === undefined) {
      title = `${tokenToggle === "Tokens" ? "Token" : "NFT"} ${listingToggle}ing Listings`
  }

  return (
      <div className="flex justify-between items-end pt-4 px-1 sm:px-2 md:px-3 xl:px-6">
          <h1 className="text-tiny md:text-base xl:text-lg font-medium text-white">
              { title }
          </h1>
          <a href="#" className="mt-1 font-medium text-red-500 transition duration-150 text-sm lg:text-tiny 2xl:text-base">
              All Listings
          </a>
      </div>
  )
};

const SectionHeader: FunctionComponent<{displayToggles: boolean}> = ({ displayToggles }) => {
    if(!displayToggles) return (<></>);
    return (
      <>
        {/* Mobile */}
          <div className="lg:hidden flex justify-evenly justify-center items-center mt-4 gap-x-3">
              <div className="flex flex-col max-w-xs flex-row items-center flex w-full gap-2">
                  <DenomSearchBox type={"principal"} />
                  <DenomSearchBox type={"collateral"} />
              </div>
              <div className="h-fit">
                  <AdvancedButton />
              </div>
          </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-5 justify-center gap-x-2 items-center w-full mt-6">
            <div className="w-full col-span-2 flex justify-self-center xl:w-5/6">
              <DenomSearchBox type={"principal"} />
            </div>
          <div className="w-full col-span-2 flex xl:w-5/6">
              <DenomSearchBox type={"collateral"} />
            </div>
          <div className="col-span-1 flex">
            <AdvancedButton />
          </div>
        </div>
      </>
    )
};


export const ListingsSection: FunctionComponent<{ listings: Listing[], title?: string, displayFilters: boolean }> = ({ listings, title, displayFilters}) => {
  return (
    <div className="border-t border-black mb-4 lg:mb-8 w-full px-3">
      <SectionTitle title={title} />
      <SectionHeader displayToggles={displayFilters} />
        <div className="
            justify-center items-center w-full my-4 lg:my-6
            grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 md:gap-x-4 xl:gap-x-8
        ">
        {
          listings.map((ele, index) => (
            <Card key={'listing-' + index} index={index} listing={ele} />
          ))
        }
      </div>
    </div>
  )
};