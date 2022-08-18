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
      <div className="py-5 sm:py-0">
        <div className="flex justify-between ml-5 items-center sm:ml-20 md:ml-10 lg:ml-0 tablet:ml-8 desktop:ml-12">
          <h1 className="font-medium text-md sm:text-lg text-white">NFT Lending Listings</h1>
          <div className="items-center mr-5 sm:mr-20 md:mr-10 laptop:mr-0 tablet:mr-16 mt-1">
            <a href="#" className="font-medium text-tiny sm:text-kindasmall text-red-500 hover:text-red-400 transition duration-150">All Listings</a>
          </div>
        </div>
        <div className="inline-flex flex w-full mt-6 sm:ml-6 items-center">
          <PrincipalDenomBox />
          <CollateralDenomBox />
          <AdvancedButton />
        </div>
        <div className="mt-6 sm:mt-8">
          <div className="border-b border-black mx-2 pb-10 justify-center items-center
          grid laptop:grid-rows-1 grid-rows-2 grid-flow-col
          gap-8 md:gap-y-10 desktop:gap-x-20 tablet:gap-x-12 laptop:gap-x-6 xl:gap-x-12">
            <>
              {
                exampleListings.map((ele, index) => (
                  <BorrowCard key={'listing-' + index} listing={exampleListings[index]} />
                ))
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
}