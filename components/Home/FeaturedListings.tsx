import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../stores/Home";
import { LendCard } from "./LendCard";
import exampleListings from "../../exampleListings.json";

export const FeaturedListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.featuredListings);
  const setFeaturedListings = useHomeStore((state) => state.setFeaturedListings);

  useEffect(() => {
    setTimeout(() => {
      setFeaturedListings(exampleListings.featured);
    }, 5000)
  }, [setFeaturedListings]);

  return (
    <>
      <div className="w-11/12 2xl:w-4/5 py-4 default:py-6 big:py-8 4k:py-12 border-b border-black w-full mx-auto">
        <div className="flex justify-between items-end">
          <h1 className="text-md sm:text-base default:text-xl big:text-3xl 4k:text-5xl font-medium text-white ml-6">
            Featured Listings (All)
          </h1>
          <a href="#" className="mr-6 mt-1 font-medium text-red-500 transition duration-150 text-tiny sm:text-kindasmaller default:text-base big:text-xl 4k:text-3xl">
            All Listings
          </a>
        </div>
        <div className="py-4 4k:pt-10 sm:pt-4 sm:px-8">
          <div className="
            justify-center items-center grid
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full
            gap-x-10 sm:gap-x-16 md:gap-x-2 lg:gap-x-4 desktop:gap-x-14 big:gap-x-20
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
};