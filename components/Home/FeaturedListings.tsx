import { FunctionComponent } from "react";
import { LendCard } from "./LendCard";


export const FeaturedListings: FunctionComponent = () => {

  let exampleListings = [
    {
      isPartiallyFunded: true,
      lending: {
        type: "snip20",
        amount: 3600,
        total: 10000,
        estimatedValue: null,
        name: "sATOM"
      },
      collateral: {
        type: "snip20",
        name: "sSCRT",
        amount: 18
      },
      duration: "1 month, and 3 weeks",
      returnPercentage: 5
    },
    {
      isPartiallyFunded: false,
      lending: {
        type: "snip20",
        amount: 4500,
        estimatedValue: 4500,
        total: null,
        name: "sSCRT"
      },
      collateral: {
        type: "snip721",
        name: "Anons",
        amount: 2
      },
      duration: "3 months",
      returnPercentage: 6
    },
    {
      isPartiallyFunded: false,
      lending: {
        type: "snip20",
        amount: 3500,
        estimatedValue: 3600,
        total: null,
        name: "sSCRT"
      },
      collateral: {
        type: "snip20",
        name: "sXMR",
        amount: 21.432
      },
      duration: "1 month, and 3 days",
      returnPercentage: 7
    },
    {
      isPartiallyFunded: true,
      lending: {
        type: "snip20",
        amount: 2100,
        estimatedValue: null,
        total: 4000,
        name: "sUSDT"
      },
      collateral: {
        type: "snip20",
        name: "sATOM",
        amount: 0.05
      },
      duration: "2 weeks",
      returnPercentage: 5
    }
  ]

  return (
    <>
      <div className="py-6">
        <div className="flex justify-between">
          <h1 className="font-medium text-xl text-white ml-10">Featured Listings (All)</h1>
          <div className="items-center mr-16 mt-1">
            <a href="#" className="font-medium text-sm text-red-500 hover:text-red-400 transition duration-150">All Listings</a>
          </div>
        </div>
        <div className="py-8">
          <div className="border-b border-black mx-2 pb-10 justify-center items-center
          grid tablet:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 xs:grid-rows-4 grid-rows-4 grid-flow-col
          gap-10 tablet:gap-20 md:gap-x-15 md:gap-y-10">
            <>
              {
                exampleListings.map((listing, index) => (
                  <LendCard key={'listing-' + index} listing={exampleListings[index]} />
                ))
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}