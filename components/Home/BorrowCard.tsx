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

export const BorrowCard: FunctionComponent<BorrowCardProps> = ({ listing }) => {

  const loading = useHomeStore((state) => state.loading)
  const setLoading = useHomeStore((state) => state.setLoading)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [setLoading])

  return (
    <div className={`col-span-1 lg:row-span-1 ${loading ? null : "hover:cursor-pointer"}`}>
      <div className="flex flex-col bg-[#1A2128] rounded-lg items-center px-4 sm:min-w-52 sm:w-full w-40 h-auto sm:h-fit shadow-sm hover:shadow-2xl transition duration-300">
        <div className="border-b border-[#8B98FF] pt-3 pb-2 w-full flex justify-center">
          <p className="card-title text-tiny sm:text-kindasmall">Asking to Borrow</p>
        </div>
        <>
        {
          loading ?
            <>
                <div className="animate-pulse flex space-x-4 w-full pt-1 flex justify-center">
                  <div className="py-1 px-4">
                    <div className="h-2 bg-slate-700 mt-2 sm:mt-4 rounded"></div>
                    <div className="grid grid-cols-5 gap-4 mt-4">
                      <div className="h-2 bg-slate-700 rounded col-span-3 mt-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-2 mt-2"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded mt-4 sm:mt-6"></div>
                    <div className="rounded-full bg-slate-700 h-28 w-28 mt-6 mb-4 sm:w-32 sm:h-32"></div>
                  </div>
                </div>
            </>
            :
            <>
              <div className="border-b border-[#8B98FF] flex flex-col w-full pt-1 pb-1">
                <div className="w-full inline-flex justify-center items-end">
                  <p className="text-white text-tiny sm:text-kindasmall">{listing.borrowing.amount}</p>
                  <p className="text-sm text-white pl-1 sm:text-tiny">{listing.borrowing.name}</p>
                  <p className="text-gray-400 text-sm pl-1 sm:text-tiny sm:pb-0.5">≈${listing.borrowing.estimatedValue}</p>
                </div>
                <div className="w-2/3 border-b border-[#535C95] flex mx-auto pt-1"></div>
                <p className="text-[#86DD85] flex justify-center text-sm sm:text-kindasmaller pt-1">Interest Rate of {listing.returnPercentage}%</p>
                <p className="text-sm text-white pl-1 flex justify-center sm:text-tiny">for {listing.duration}</p>
              </div>
              <div className="mt-1 flex flex-col w-full h-full">
                <div className="w-full flex justify-center items-end">
                  <p className="collateralized-by text-kindasmall">Collateralized by</p>
                </div>
                <div className="w-full inline-flex justify-center items-end pt-1">
                  <p className="text-kindasmall text-white">{listing.collateral.amount}x {listing.collateral.name}</p>
                  <Image src={`/static/icons/${listing.collateral.name}.svg`} className="rounded-full border-white border w-5 h-5 bg-black ml-2" alt={listing.collateral.name} />
                </div>
                <div className="flex justify-center">
                  <Image src={`/static/temporary/nfts/${listing.collateral.name}.png`} className="rounded-xl big:h-42 sm:h-36 h-20 w-auto mt-3 mb-5 bg-black" alt={listing.collateral.name} />
                </div>
              </div>
            </>
          }
        </>
      </div>
    </div>
  )
}