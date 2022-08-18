import { FunctionComponent } from "react";
import { AdvancedButton } from "./AdvancedButton";
import { BorrowCard } from "./BorrowCard"
import { CollateralDenomBox } from "./CollateralDenomBox";
import { PrincipalDenomBox } from "./PrincipalDenomBox"
let exampleListings = [
  {
    borrowing: {
      type: "snip20",
      amount: 300,
      name: "sSCRT",
      estimatedValue: 600
    },
    collateral: {
      type: "snip721",
      name: "Anons",
      amount: 2
    },
    duration: "1 month",
    returnPercentage: 6
  },
  {
    borrowing: {
      type: "snip20",
      amount: 500,
      name: "sXMR",
      estimatedValue: 600
    },
    collateral: {
      type: "snip721",
      name: "Anons",
      amount: 2
    },
    duration: "1 month",
    returnPercentage: 5
  },
  {
    borrowing: {
      type: "snip20",
      amount: 400,
      name: "sUSDT",
      estimatedValue: 600
    },
    collateral: {
      type: "snip721",
      name: "Anons",
      amount: 1
    },
    duration: "2 weeks",
    returnPercentage: 7
  },
  {
    borrowing: {
      type: "snip20",
      amount: 99,
      name: "sATOM",
      estimatedValue: 600
    },
    collateral: {
      type: "snip721",
      name: "Anons",
      amount: 1
    },
    duration: "3 weeks",
    returnPercentage: 5
  }
]

export const NFTLendingListings: FunctionComponent = () => {
  return (
    <>
      <div className="w-11/12 2xl:w-4/5 py-5 sm:pt-6 sm:pb-8 border-b border-black w-full mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-md sm:text-lg default:text-xl big:text-2xl 4k:text-4xl font-medium text-white ml-6">
            NFT Lending Listings
          </h1>
          <a href="#" className="items-center mr-6 mt-1 font-medium text-red-500 hover:text-[#f16060] transition duration-150 text-tiny sm:text-kindasmall default:text-base big:text-xl 4k:text-2xl">
            All Listings
          </a>
        </div>
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
        <div className="hidden sm:grid grid-cols-5 justify-center items-center w-full gap-x-4 mt-4">
          <div className="col-span-2 flex justify-end">
            <PrincipalDenomBox />
          </div>
          <div className="col-span-2 flex justify-center">
            <CollateralDenomBox />
          </div>
          <div className="col-span-1">
            <AdvancedButton />
          </div>
        </div>
        <div className="pt-4 sm:pt-4 big:pt-8 sm:px-8">
          <div className="
            justify-center items-center grid
            grid-cols-2 sm:grid-cols-4 gap-4 w-full
            sm:gap-x-1 md:gap-x-2 lg:gap-x-4 desktop:gap-x-14 big:gap-x-20
          ">
            <>
              {
                exampleListings.map((ele, index) => (
                  <BorrowCard key={'listing-' + index} listing={ele} />
                ))
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}