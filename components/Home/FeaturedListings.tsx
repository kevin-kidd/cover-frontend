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
                exampleListings.map((ele, index) => (
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