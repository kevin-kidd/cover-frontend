import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../stores/Home";
import exampleListings from "../../exampleListings.json";
import {ListingCard} from "./ListingCard";

export const FeaturedListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.featuredListings);
  const setFeaturedListings = useHomeStore((state) => state.setFeaturedListings);

  useEffect(() => {
    setTimeout(() => {
      setFeaturedListings(exampleListings.featured);
    }, 5000)
  }, [setFeaturedListings]);

  return (
    <div className="pb-8 w-full">
      <div className="flex justify-between items-end py-4">
        <h1 className="text-tiny md:text-base xl:text-lg font-medium text-white">Featured Listings (All)</h1>
        <a href="#" className="mt-1 font-medium text-red-500 transition duration-150 text-sm lg:text-tiny 2xl:text-base">
          All Listings
        </a>
      </div>
      <div className="
        justify-center items-center w-full
        grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4
        gap-x-2 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10
      ">
        {
          listings.map((ele, index) => (
            <ListingCard key={'listing-' + index} listing={ele} index={index} />
          ))
        }
      </div>
    </div>
  )
};