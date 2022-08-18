import Image from "next/future/image";
import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../states/HomeState";

interface Listing {
  borrowing: {
    type: string,
    amount: number,
    name: string,
    estimatedValue: number
  },
  collateral: {
    type: string,
    name: string,
    amount: number
  },
  duration: string,
  returnPercentage: number
}

type BorrowCardProps = {
  listing: Listing
}

const classes = {
  gradient: "text-tiny desktop:text-kindasmaller big:text-lg 4k:text-3xl",
  amount: "text-kindasmaller desktop:text-kindasmall big:text-xl 4k:text-4xl",
}

export const BorrowCard: FunctionComponent<BorrowCardProps> = ({ listing }) => {

  const loading = useHomeStore((state) => state.loading)
  const setLoading = useHomeStore((state) => state.setLoading)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [setLoading])

  return (
    <div className={`col-span-1 flex w-full justify-center ${loading ? null : "hover:cursor-pointer"}`}>
      <div className="flex flex-col bg-[#1A2128] w-full object-cover px-4 4k:px-10 rounded-lg big:rounded-2xl 4k:rounded-3xl items-center shadow-sm hover:shadow-2xl transition duration-300">
        <div className="border-b border-[#8B98FF] w-full py-2 4k:pt-5 4k:pb-4 flex justify-center">
          <p className="card-title text-kindasmall desktop:text-base big:text-xl 4k:text-4xl">Asking to Borrow</p>
        </div>
        <>
        {
          loading ?
            <>
                <div className="animate-pulse flex justify-center space-x-4 w-full pt-1">
                  <div className="py-1 w-full">
                    <div className="px-4 big:px-8 4k:px-12 w-full">
                      <div className="h-2 4k:h-4 bg-slate-700 mt-2 sm:mt-4 4k:mt-10 rounded 4k:rounded-2xl"></div>
                      <div className="grid grid-cols-5 gap-4 mt-4 4k:mt-8">
                        <div className="h-2 4k:h-4 bg-slate-700 rounded 4k:rounded-2xl col-span-3 mt-2 4k:mt-6"></div>
                        <div className="h-2 4k:h-4 bg-slate-700 rounded 4k:rounded-2xl col-span-2 mt-2 4k:mt-6"></div>
                      </div>
                      <div className="h-2 4k:h-4 rounded 4k:rounded-2xl bg-slate-700 mt-4 sm:mt-6 4k:mt-10"></div>
                    </div>
                    <div className="py-3 px-2 w-full h-full">
                      <div className="rounded-2xl bg-slate-700 aspect-square mt-2 w-full h-auto"></div>
                    </div>
                  </div>
                </div>
            </>
            :
            <>
              <div className="border-b border-[#8B98FF] flex flex-col w-full">
                <div className="pt-1 4k:pt-4 w-fit mx-auto px-2 desktop:px-4 4k:px-10 border-b border-[#535C95] inline-flex justify-center items-center">
                  <p className={`text-white mb-1 ${classes.amount}`}>{listing.borrowing.amount}</p>
                  <p className={`text-white pl-1 ${classes.gradient}`}>{listing.borrowing.name}</p>
                  <p className="text-gray-400 pl-1 4k:pl-3 text-sm desktop:text-tiny big:text-base 4k:text-2xl">≈${listing.borrowing.estimatedValue}</p>
                </div>
                <p className={`text-[#86DD85] flex justify-center pt-1 ${classes.gradient}`}>Interest Rate of {listing.returnPercentage}%</p>
                <p className="text-white pl-1 pb-1 4k:pb-4 flex justify-center text-tiny desktop:text-kindasmaller big:text-lg 4k:text-2xl">for {listing.duration}</p>
              </div>
              <div className="mt-1 4k:mt-4 flex flex-col w-full h-full">
                <div className="w-full flex justify-center items-center">
                  <p className={`collateralized-by ${classes.amount}`}>Collateralized by</p>
                </div>
                <div className="w-full inline-flex justify-center items-center pt-1 4k:pt-3">
                  <p className={`text-white ${classes.amount}`}>{listing.collateral.amount}x {listing.collateral.name}</p>
                  <Image src={`/static/icons/${listing.collateral.name}.svg`} className="rounded-full border-white border w-5 h-5 4k:w-16 4k:h-16 bg-black ml-2 4k:ml-6" alt={listing.collateral.name} />
                </div>
                <div className="my-2 p-1 4k:p-8 w-full mx-auto flex justify-center">
                  <Image src={`/static/temporary/nfts/${listing.collateral.name}.png`} className="rounded desktop:rounded-lg big:rounded-xl 4k:rounded-2xl bg-black bg-black w-full" alt={listing.collateral.name} />
                </div>
              </div>
            </>
          }
        </>
      </div>
    </div>
  )
}