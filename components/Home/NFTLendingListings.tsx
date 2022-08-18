import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../stores/Home";
import { AdvancedButton } from "./AdvancedButton";
import { BorrowCard } from "./BorrowCard"
import { CollateralDenomBox } from "./CollateralDenomBox";
import { PrincipalDenomBox } from "./PrincipalDenomBox"
import exampleListings from "../../exampleListings.json";


export const NFTLendingListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.selectedListings);
  const setSelectedListings = useHomeStore((state) => state.setSelectedListings);

  useEffect(() => {
    setTimeout(() => {
      setSelectedListings(exampleListings.lend.nft);
    }, 5000)
  }, [setSelectedListings]);

  return (
    <>
      <div className="w-11/12 2xl:w-4/5 py-4 default:pt-6 big:pt-8 4k:pt-12 w-full mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-md sm:text-base default:text-xl big:text-3xl 4k:text-5xl font-medium text-white ml-6">
            NFT Lending Listings
          </h1>
          <a href="#" className="mr-6 mt-1 font-medium text-red-500 transition duration-150 text-tiny sm:text-kindasmaller default:text-base big:text-xl 4k:text-3xl">
            All Listings
          </a>
        </div>
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
        <div className="hidden sm:grid grid-cols-5 justify-center items-center w-full md:gap-x-12 mt-4">
          <div className="col-span-2 flex justify-center">
            <div className="w-full sm:w-5/6 sm:h-10 big:h-12 4k:h-16 h-8">
              <PrincipalDenomBox />
            </div>
          </div>
          <div className="col-span-2 flex">
            <div className="w-full sm:w-5/6 sm:h-10 big:h-12 4k:h-16 h-8">
              <CollateralDenomBox />
            </div>
          </div>
          <div className="col-span-1 flex">
            <AdvancedButton />
          </div>
        </div>
        <div className="py-4 4k:pt-10 sm:pt-4 sm:px-8">
          <div className="
              justify-center items-center grid
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full
              gap-x-10 sm:gap-x-16 md:gap-x-2 lg:gap-x-4 desktop:gap-x-14 big:gap-x-20
          ">
              {
                listings.map((ele, index) => (
                  <BorrowCard key={'listing-' + index} listing={ele} />
                ))
              }
          </div>
        </div>
      </div>
    </>
  )
};