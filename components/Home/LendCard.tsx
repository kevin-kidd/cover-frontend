import Image from "next/future/image";
import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../states/HomeState";

interface Listing {
  isPartiallyFunded: boolean,
  lending: {
    type: string,
    estimatedValue: number,
    amount: number,
    total: number,
    name: string
  },
  collateral: {
    type: string,
    name: string,
    amount: number
  },
  duration: string,
  returnPercentage: number
}

type LendCardProps = {
  listing: Listing
}

export const LendCard: FunctionComponent<LendCardProps> = ({ listing }) => {

  const loading = useHomeStore((state) => state.loading)
  const setLoading = useHomeStore((state) => state.setLoading)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [setLoading])

  let collateralPerAmount: string
  let roundedCollateral: number

  if(listing.collateral.amount < 1) {
    collateralPerAmount = (Math.round(1 / listing.collateral.amount)).toString()
    if(collateralPerAmount.length > 7) {
        collateralPerAmount = collateralPerAmount.slice(0, 6) + "..."
    }
  } else {
    roundedCollateral = Math.round(listing.collateral.amount)
  }

  return (
    <div className={`col-span-1 lg:row-span-1 ${loading ? null : "hover:cursor-pointer"}`}>
      <div className="flex flex-col bg-[#1A2128] rounded-lg items-center px-4 sm:min-w-52 sm:w-full w-40 h-72 sm:h-80 shadow-sm hover:shadow-2xl transition duration-300">
        <div className="border-b border-[#8B98FF] pt-3 pb-2 w-full flex justify-center">
          <p className="card-title text-tiny sm:text-kindasmall">Offering to Lend</p>
        </div>
        <>
        {
          loading ?
            <>
                <div className="animate-pulse flex space-x-4 w-full pt-5">
                  <div className="flex-1 py-1 px-4">
                    <div className="h-2 bg-slate-700 mt-2 rounded"></div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                      <div className="h-2 bg-slate-700 rounded col-span-3 mt-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-2 mt-2"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded mt-2"></div>
                    <div className="rounded-full bg-slate-700 h-28 w-28 mt-10 mx-auto"></div>
                  </div>
                </div>
            </>
            :
            <>
              { listing.isPartiallyFunded ? 
                <>
                  <div className="border-b border-[#8B98FF] flex flex-col w-full">
                    <div className="pt-2 w-full inline-flex justify-center items-end">
                        <p className="card-upto text-sm sm:text-tiny">up to</p>
                        <p className="text-white sm:pl-2 pl-1 text-tiny sm:text-kindasmall">{listing.lending.amount} / {listing.lending.total}</p>
                        <p className="text-white sm:pl-2 pl-1 text-sm sm:text-tiny">{listing.lending.name}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-40 rounded-full h-2.5 mt-1 mb-1 progress-bar-track">
                          <div className="progress-bar h-2.5 rounded-full" style={{width: `${(1 - (listing.lending.amount / listing.lending.total)) * 100}%`}}></div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-tiny text-white mb-2 justify-center flex">
                      for {listing.duration}
                    </p>
                  </div>
                  </>
                  :
                  <>
                    <div className="border-b border-[#8B98FF] flex flex-col w-full pt-2 pb-3">
                      <div className="w-full inline-flex justify-center items-end">
                        <p className="text-white text-tiny sm:text-kindasmall">{listing.lending.amount}</p>
                        <p className="text-sm text-white pl-1 sm:text-tiny">{listing.lending.name}</p>
                        <p className="text-gray-400 text-sm pl-1 sm:text-tiny sm:pb-0.5">≈${listing.lending.estimatedValue}</p>
                      </div>
                      <p className="text-sm text-white justify-center flex pt-0.5 sm:text-tiny">
                        for {listing.duration}
                      </p>
                    </div>
                  </>
                }
                <div className="w-full py-2 inline-flex justify-center pb-1 items-end">
                  <p className="card-asking-for text-sm sm:text-tiny">Asking for:</p>
                  <p className="pl-2 text-[#FF6969] text-tiny sm:text-kindasmaller">+{listing.returnPercentage}% return</p>
                </div>
                <div className="pt-1 pb-2 inline-flex items-center justify-center pb-1 whitespace-nowrap">
                  <p className="card-and text-sm sm:text-tiny">And</p>
                  { listing.collateral.type === "snip721" ? 
                    <>
                      <p className="sm:pl-2 pl-1 text-white text-tiny sm:text-kindasmaller">{listing.collateral.amount} {listing.collateral.name}</p>
                      <p className="sm:pl-2 pl-1 card-collateral text-sm sm:text-tiny">as collateral</p>
                    </>
                    :
                    <>
                      {
                        listing.collateral.amount < 1 ? 
                        <>
                          <p className="sm:pl-2 pl-1 text-white text-tiny sm:text-kindasmaller">1 {listing.collateral.name}</p>
                          <p className="sm:pl-2 pl-1 card-collateral text-sm sm:text-tiny">per {collateralPerAmount} {listing.lending.name}</p>
                        </>
                        :
                        <>
                          <p className="sm:pl-2 pl-1 text-white text-tiny sm:text-kindasmaller">{roundedCollateral === listing.collateral.amount ? `${listing.collateral.amount}` : `~${roundedCollateral}`} {listing.collateral.name}</p>
                          <p className="sm:pl-2 pl-1 card-collateral text-sm sm:text-tiny">per {collateralPerAmount} {listing.lending.name}</p>
                        </>
                      }
                    </>
                  }
                </div>
                <div className={`rounded-full border-8 border-white border-double ${listing.isPartiallyFunded ? "mt-3" : "mt-6"}`}>
                  <div className="rounded-full bg-white w-10 h-10 -ml-1 absolute -mt-2">
                    <Image src={`/static/icons/${listing.collateral.name}.svg`} className="rounded-full border-white border-2 w-full h-full bg-black" alt={listing.collateral.name} />
                  </div>
                  <Image src={`/static/icons/${listing.lending.name}.svg`} className="rounded-full bg-black border-white border h-20 w-20 sm:h-24 sm:w-24" priority alt={listing.lending.name} />
                </div>
            </>
          }
        </>
      </div>
    </div>
  )
}