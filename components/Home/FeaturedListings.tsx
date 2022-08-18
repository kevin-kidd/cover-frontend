import { FunctionComponent } from "react";
import { useHomeStore } from "../../states/HomeState";
import { LendCard } from "./LendCard";

export const FeaturedListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.listings.featured)

  return (
    <>
      <div className="w-11/12 2xl:w-4/5 py-5 sm:pt-6 sm:pb-8 border-b border-black w-full mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-md sm:text-lg default:text-xl big:text-2xl 4k:text-4xl font-medium text-white ml-6">
            Featured Listings (All)
          </h1>
          <a href="#" className="items-center mr-6 mt-1 font-medium text-red-500 hover:text-[#f16060] transition duration-150 text-tiny sm:text-kindasmall default:text-base big:text-xl 4k:text-2xl">
            All Listings
          </a>
        </div>
        <div className="pt-4 4k:pt-10 sm:pt-4 sm:px-8">
          <div className="
            justify-center items-center grid
            grid-cols-2 sm:grid-cols-4 gap-4 w-full
            sm:gap-x-1 md:gap-x-2 lg:gap-x-4 desktop:gap-x-14 big:gap-x-20
          ">
            <>
              {
                listings.map((ele, index) => (
                  <LendCard key={'listing-' + index} listing={ele} />
                ))
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}