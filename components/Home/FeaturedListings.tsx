import { FunctionComponent, useEffect } from "react";
import { useHomeStore } from "../../stores/Home";
import { LendCard } from "./LendCard";

export const FeaturedListings: FunctionComponent = () => {

  const listings = useHomeStore((state) => state.featuredListings);
  const setFeaturedListings = useHomeStore((state) => state.setFeaturedListings);

  useEffect(() => {
    setTimeout(() => {
      setFeaturedListings([
        {
          isPartiallyFunded: true,
          lending: {
            type: "snip20",
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sATOM.svg",
            amount: 3600,
            total: 10000,
            name: "sATOM"
          },
          collateral: {
            type: "snip20",
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sSCRT.svg",
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
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sSCRT.svg",
            amount: 4500,
            estimatedValue: 4500,
            name: "sSCRT"
          },
          collateral: {
            type: "snip721",
            image: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret1hu0nwzzxlrwks7pn0rslmgsk7kcx0s0kgztq22_icon_1639929050903.jpg",
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
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sSCRT.svg",
            amount: 3500,
            estimatedValue: 3600,
            name: "sSCRT"
          },
          collateral: {
            type: "snip20",
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sXMR.svg",
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
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sUSDT.svg",
            amount: 2100,
            total: 4000,
            name: "sUSDT"
          },
          collateral: {
            type: "snip20",
            image: "https://cloudflare-ipfs.com/ipfs/bafybeif5snkn5bvr2swh3zf3zq4rqkrggbpg6avjsmygyy5mftnb5rh4z4/sATOM.svg",
            name: "sATOM",
            amount: 0.05
          },
          duration: "2 weeks",
          returnPercentage: 5
        }
      ])
    }, 5000)
  }, [setFeaturedListings]);

  return (
    <>
      <div className="w-11/12 2xl:w-4/5 sm:py-4 default:py-6 big:py-8 4k:py-12 border-b border-black w-full mx-auto">
        <div className="flex justify-between items-end">
          <h1 className="text-md sm:text-base default:text-xl big:text-3xl 4k:text-5xl font-medium text-white ml-6">
            Featured Listings (All)
          </h1>
          <a href="#" className="mr-6 mt-1 font-medium text-red-500 transition duration-150 text-tiny sm:text-kindasmaller default:text-base big:text-xl 4k:text-3xl">
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
                listings.map((ele, index) => (
                  <LendCard key={'listing-' + index} listing={ele} />
                ))
              }
            </>
          </div>
        </div>
      </div>
    </>
  )
};