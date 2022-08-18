import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { Listing } from "../../states/HomeState";

type LendCardProps = {
  listing: Listing
}

const classes = {
  gradient: "text-tiny desktop:text-kindasmaller big:text-lg 4k:text-3xl",
  amount: "text-tiny sm:text-kindasmaller desktop:text-kindasmall big:text-xl 4k:text-4xl",
}

export const LendCard: FunctionComponent<LendCardProps> = ({ listing }) => {

  const [loading, setLoading] = useState(true)

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
    <div className={`col-span-1 flex w-full justify-center ${loading ? null : "hover:cursor-pointer"}`}>
      <div className="flex flex-col bg-[#1A2128] w-full object-cover px-4 4k:px-10 rounded-lg big:rounded-2xl 4k:rounded-3xl items-center shadow-sm hover:shadow-2xl transition duration-300">
        <div className="border-b border-[#8B98FF] w-full py-2 4k:pt-5 4k:pb-4 flex justify-center">
          <p className="card-title text-kindasmall desktop:text-base big:text-xl 4k:text-4xl">Offering to Lend</p>
        </div>
        <>
        {
          loading ?
          <>
              <div className="animate-pulse flex justify-center space-x-4 w-full pt-1">
                <div className="py-1 px-4 big:px-8 4k:px-12 w-full">
                  <div className="h-2 4k:h-4 bg-slate-700 mt-2 sm:mt-4 4k:mt-10 rounded 4k:rounded-2xl"></div>
                  <div className="grid grid-cols-5 gap-4 mt-4 4k:mt-8">
                    <div className="h-2 4k:h-4 bg-slate-700 rounded 4k:rounded-2xl col-span-3 mt-2 4k:mt-6"></div>
                    <div className="h-2 4k:h-4 bg-slate-700 rounded 4k:rounded-2xl col-span-2 mt-2 4k:mt-6"></div>
                  </div>
                  <div className="h-2 4k:h-4 rounded 4k:rounded-2xl bg-slate-700 mt-4 sm:mt-6 4k:mt-10"></div>
                  { listing.collateral.image === "" ?  
                      <div className="p-2 sm:p-4 big:p-10 4k:p-12 w-full h-full">
                        <div className="rounded-full bg-slate-700 aspect-square mt-2 w-full h-auto"></div>
                      </div> : null
                  }
                </div>
              </div>
          </>
          :
          <>
            { listing.isPartiallyFunded ? 
              <>
                <div className="border-b border-[#8B98FF] flex flex-col w-full py-1 4k:py-4">
                  <div className="w-full inline-flex justify-center items-center">
                      <p className={`card-upto ${classes.gradient}`}>up to</p>
                      <p className="text-white 4k:pl-3 desktop:pl-2 sm:pl-1 pl-0.5 text-tiny sm:text-kindasmaller desktop:text-kindasmall big:text-xl 4k:text-4xl">{listing.lending.amount} / {listing.lending.total}</p>
                      <p className={`text-white 4k:pl-3 desktop:pl-2 sm:pl-1 pl-0.5 ${classes.gradient}`}>{listing.lending.name}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-11/12 lg:w-10/12 rounded-full h-2 desktop:h-2.5 big:h-3 4k:h-5 my-1 4k:my-3 progress-bar-track">
                        <div className="progress-bar h-2 desktop:h-2.5 big:h-3 4k:h-5 rounded-full" style={{width: `${(1 - (listing.lending.amount / listing.lending.total)) * 100}%`}}></div>
                    </div>
                  </div>
                  <p className="text-tiny desktop:text-kindasmaller big:text-lg 4k:text-2xl text-white justify-center flex">
                    for {listing.duration}
                  </p>
                </div>
              </>
              :
              <>
                <div className="border-b border-[#8B98FF] flex flex-col w-full py-1 4k:py-4">
                  <div className="w-full inline-flex justify-center items-center">
                    <p className={`text-white ${classes.amount}`}>{listing.lending.amount}</p>
                    <p className={`text-white pl-1 4k:pl-3 sm:pt-0.5 ${classes.gradient}`}>{listing.lending.name}</p>
                    <p className="text-gray-400 pl-1 4k:pl-3 text-sm desktop:text-tiny big:text-base 4k:text-2xl">≈${listing.lending.estimatedValue}</p>
                  </div>
                  <p className="text-white justify-center flex pt-0.5 text-tiny desktop:text-kindasmaller big:text-lg 4k:text-2xl">
                    for {listing.duration}
                  </p>
                </div>
              </>
            }
            <div className="w-full pt-2 pb-1 4k:py-4 inline-flex justify-center items-end">
              <p className={`card-asking-for ${classes.gradient}`}>Asking for:</p>
              <p className="pl-2 4k:pl-4 text-[#FF6969] text-kindasmaller desktop:text-kindasmall big:text-xl 4k:text-4xl">+{listing.returnPercentage}% return</p>
            </div>
            <div className="pb-1 4k:pb-4 inline-flex items-center justify-center whitespace-nowrap">
              <p className={`card-and ${classes.gradient}`}>And</p>
              { listing.collateral.type === "snip721" ? 
                <>
                  <p className="sm:pl-2 pl-1 4k:pl-3 text-white text-tiny sm:text-kindasmaller desktop:text-kindasmall big:text-xl 4k:text-4xl">{listing.collateral.amount} {listing.collateral.name}</p>
                  <p className={`sm:pl-2 pl-1 4k:pl-3 card-collateral ${classes.gradient}`}>as collateral</p>
                </>
                :
                <>
                  {
                    listing.collateral.amount < 1 ? 
                    <>
                      <p className={`sm:pl-2 pl-1 4k:pl-3 text-white ${classes.amount}`}>1 {listing.collateral.name}</p>
                      <p className={`sm:pl-2 pl-1 4k:pl-3 card-collateral ${classes.gradient}`}>per {collateralPerAmount} {listing.lending.name}</p>
                    </>
                    :
                    <>
                      <p className={`sm:pl-2 pl-1 4k:pl-3 text-white ${classes.amount}`}>{roundedCollateral === listing.collateral.amount ? `${listing.collateral.amount}` : `~${roundedCollateral}`} {listing.collateral.name}</p>
                      <p className={`sm:pl-2 pl-1 4k:pl-3 card-collateral ${classes.gradient}`}>per {collateralPerAmount} {listing.lending.name}</p>
                    </>
                  }
                </>
              }
            </div>
          </>
        }
        { listing.collateral.image === "" ? 
          null :
          <div className="my-2 p-1 4k:p-8 w-full max-w-1/2l aspect-square mx-auto block justify-center">
            <div className="rounded-full block bg-white w-8 h-8 sm:w-10 sm:h-10 desktop:h-12 desktop:w-12 big:w-16 big:h-16 4k:w-28 4k:h-28 -ml-1 absolute -mt-2 z-10 border-2 border-white border-double">
              <Image 
                src={"https://res.cloudinary.com/drgbtjcgt/image/fetch/" + listing.collateral.image} 
                width="100" height="100" alt={listing.collateral.name} priority={true}
                className="rounded-full border-white border-2 w-full h-full" layout="responsive" 
              />
            </div>
            <div className="rounded-full block w-full h-full border-double border-white border-6">
              <Image 
                layout="responsive" width="500" height="500" priority={true} className="rounded-full w-full h-full" 
                onLoadingComplete={() => setLoading(false)} alt={listing.lending.name}
                src={"https://res.cloudinary.com/drgbtjcgt/image/fetch/" + listing.lending.image}
              />
            </div>
          </div>
        }
      </>
      </div>
    </div>
  )
}