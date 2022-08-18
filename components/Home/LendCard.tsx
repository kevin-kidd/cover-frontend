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
  }, [])

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
    <div className="col-span-1 lg:row-span-1 hover:cursor-pointer">
      <div className="flex flex-col bg-[#1A2128] rounded-lg items-center px-4 min-w-52 h-80 shadow-sm hover:shadow-2xl transition duration-300">
        <div className="border-b border-[#8B98FF] pt-3 pb-2 w-full flex justify-center">
          <p className="card-title text-sm">Offering to Lend</p>
        </div>
        <>
        {
          !loading ?
            <>
              { listing.isPartiallyFunded ? 
                <>
                  <div className="border-b border-[#8B98FF] flex flex-col w-full">
                    <div className="pt-2 w-full inline-flex justify-center items-end">
                        <p className="card-upto text-xs">up to</p>
                        <p className="text-white text-xs pl-1">{listing.lending.amount} / {listing.lending.total}</p>
                        <p className="text-white text-xs pl-1">{listing.lending.name}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-40 rounded-full h-2.5 mt-2 mb-1 progress-bar-track">
                          <div className="progress-bar h-2.5 rounded-full" style={{width: `${(listing.lending.amount / listing.lending.total) * 100}%`}}></div>
                      </div>
                    </div>
                    <p className="text-xs text-white mb-2 justify-center flex">
                      {listing.duration}
                    </p>
                  </div>
                  </>
                  :
                  <>
                    <div className="border-b border-[#8B98FF] flex flex-col w-full">
                      <div className="pt-2 w-full inline-flex justify-center items-end pb-1">
                        <p className="text-white">{listing.lending.amount}</p>
                        <p className="text-sm text-white pl-1">{listing.lending.name}</p>
                        <p className="text-gray-400 text-xs pl-1 pb-1">≈${listing.lending.estimatedValue}</p>
                      </div>
                      <p className="text-xs text-white mb-4 justify-center flex">
                        {listing.duration}
                      </p>
                    </div>
                  </>
                }
                <div className="w-full py-2 inline-flex justify-center pb-1">
                  <p className="card-asking-for text-xs">Asking for:</p>
                  <p className="pl-2 text-[#FF6969] text-xs">+{listing.returnPercentage}% return</p>
                </div>
                <div className="pt-1 pb-2 inline-flex items-end justify-center pb-1 whitespace-nowrap">
                  <p className="card-and text-xs">And</p>
                  { listing.collateral.type === "snip721" ? 
                    <>
                      <p className="pl-2 text-white text-sm -mb-0.5">{listing.collateral.amount} {listing.collateral.name}</p>
                      <p className="pl-2 card-collateral text-xs">as collateral.</p>
                    </>
                    :
                    <>
                    {
                      listing.collateral.amount < 1 ? 
                      <>
                        <p className="pl-2 text-white text-sm -mb-0.5">1 {listing.collateral.name}</p>
                        <p className="pl-2 card-collateral text-xs">per {collateralPerAmount} {listing.lending.name}.</p>
                      </>
                      :
                      <>
                        <p className="pl-2 text-white text-sm -mb-0.5">{roundedCollateral === listing.collateral.amount ? `${listing.collateral.amount}` : `~${roundedCollateral}`} {listing.collateral.name}</p>
                        <p className="pl-2 card-collateral text-xs">per {collateralPerAmount} {listing.lending.name}.</p>
                      </>
                    }
                    </>
                  }

                </div>
                <div className="mb-5 mt-5 rounded-full border-8 border-white border-double">
                  <div className="rounded-full bg-white w-10 h-10 border-white border-3 -ml-1 absolute -mt-2">
                    <Image src={`/static/icons/${listing.collateral.name}.svg`} className="rounded-full w-full h-full" alt={listing.collateral.name} />
                  </div>
                  <Image src={`/static/icons/${listing.lending.name}.svg`} className="rounded-full h-24 w-24 bg-white" alt={listing.lending.name} />
                </div>
            </>
            :
            <>
                <div className="animate-pulse flex space-x-4 w-full pt-5">
                  <div className="flex-1 py-1 px-4">
                    <div className="h-2 bg-slate-700 mt-2 rounded"></div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                      <div className="h-2 bg-slate-700 rounded col-span-3 mt-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-2 mt-2"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded mt-2"></div>
                    <div className="rounded-full bg-slate-700 h-24 w-24 mt-10 mx-auto"></div>
                  </div>
                </div>
            </>
          }
        </>
      </div>
    </div>
  )
}