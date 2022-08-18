import Img from "next/future/image";
import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import { Listing } from "../types/general";

const classes = {
  text: {
      small: "text-xs lg:text-sm 2xl:text-tiny",
      medium: "text-tiny lg:text-base",
      large: "text-sm lg:text-base 2xl:text-lg"
  }
};

type CardProps = {
    listing: Listing
}

type Snip721DisplayProps = {
    images: string[]
    setLoading: Dispatch<SetStateAction<boolean>>
}

const SingleImage: FunctionComponent<Snip721DisplayProps> = ({ images, setLoading }) => {
    return (
        <div className="my-2 p-1 4k:p-8 w-full aspect-square">
            <Img
                placeholder="empty" priority={true} alt="nft-image"
                className="rounded desktop:rounded-lg big:rounded-xl 4k:rounded-2xl bg-black w-full h-full"
                onLoadingComplete={() => setLoading(false)}
                src={
                    images[0].includes('data:image/') ?
                        images[0] : `https://res.cloudinary.com/drgbtjcgt/image/fetch/${images[0]}`
                }
            />
        </div>
    )
};

const MultiImage: FunctionComponent<Snip721DisplayProps> = ({ images, setLoading }) => {
    if(images.length > 2) {
        return (
            <div className="my-2 p-1 w-full aspect-square">
                <Swiper
                    direction={"horizontal"}
                    pagination={{
                        clickable: true,
                    }}
                    grabCursor={true}
                    effect={"cards"}
                    modules={[Pagination, EffectCards]}
                    className="rounded"
                >
                    {
                        images.slice(0,2).map((image, index) => (
                            <SwiperSlide key={image}>
                                <Img
                                    key={`${image}-${index}`} alt="nft-image" priority={true} placeholder="empty"
                                    onLoadingComplete={() => {
                                        if(index === 1) setLoading(false);
                                    }}
                                    className="rounded desktop:rounded-lg big:rounded-xl 4k:rounded-2xl"
                                    src={
                                        image.includes('data:image/') ?
                                            image :
                                            `https://res.cloudinary.com/drgbtjcgt/image/fetch/${image}`
                                    }
                                />
                            </SwiperSlide>
                        ))
                    }
                    <SwiperSlide className="text-white rounded desktop:rounded-lg big:rounded-xl 4k:rounded-2xl bg-black">
                        Test
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }
    return (
        <div className="my-2 p-1 w-full aspect-square">
            <Swiper
                direction={"horizontal"}
                pagination={{
                    clickable: true,
                }}
                grabCursor={true}
                effect={"cards"}
                modules={[Pagination, EffectCards]}
                className="rounded desktop:rounded-lg big:rounded-xl 4k:rounded-2xl"
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={image}>
                            <Img
                                key={`${image}-${index}`} alt="nft-image" priority={true} placeholder="empty"
                                onLoadingComplete={() => {
                                    if(index === 1) setLoading(false);
                                }}
                                className="rounded desktop:rounded-lg big:rounded-xl 4k:rounded-2xl"
                                src={
                                    image.includes('data:image/') ?
                                        image :
                                        `https://res.cloudinary.com/drgbtjcgt/image/fetch/${image}`
                                }
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

const CardTitle: FunctionComponent<{cardType: string}> = ({cardType}) => {
  return (
      <div className="border-b border-[#8B98FF] w-full py-2 flex justify-center">
        <p className="card-title text-sm md:text-base xl:text-lg">
          { cardType === "borrow" ? "Asking to Borrow" : "Offering to Lend" }
        </p>
      </div>
  )
};

const CardHeader: FunctionComponent<CardProps> = ({ listing }) => {
    {/* Borrow Card */}
    if(listing.listingType === "borrow") {
        return (
            <div className="border-b border-[#8B98FF] flex flex-col w-full">
                <div className="pt-1 4k:pt-4 w-fit mx-auto px-2 desktop:px-4 4k:px-10 border-b border-[#535C95] inline-flex justify-center items-center">
                    <p className={`text-white mb-1 ${classes.text.large}`}>{listing.borrowing.amount}</p>
                    <p className={`text-white pl-1 ${classes.text.small}`}>{listing.borrowing.name}</p>
                    <p className="text-gray-400 pl-1 4k:pl-3 text-sm desktop:text-tiny big:text-base 4k:text-2xl">≈${listing.borrowing.estimatedValue}</p>
                </div>
                <p className={`text-[#86DD85] flex justify-center pt-1 ${classes.text.small}`}>Interest Rate of {listing.returnPercentage}%</p>
                <p className="text-white pl-1 pb-1 4k:pb-4 flex justify-center text-tiny desktop:text-kindasmaller big:text-lg 4k:text-2xl">for {listing.duration}</p>
            </div>
        )
    }

    {/* Lending Card */}
    return (
        <div className="border-b border-[#8B98FF] flex flex-col w-full py-2">
            { listing.lending.total ?
                <>
                    <div className="w-full inline-flex justify-center items-end">
                        <p className={`text-white sm:pl-1 pl-0.5 ${classes.text.large}`}>{listing.lending.amount} / {listing.lending.total}</p>
                        <p className={`card-upto sm:pl-1 pl-0.5 ${classes.text.small}`}>{listing.lending.name}</p>
                    </div>
                    { /* Progress Bar */ }
                    <div className="flex justify-center">
                        <div
                            className="w-11/12 lg:w-10/12 rounded-full h-2 desktop:h-2.5 big:h-3 4k:h-5 my-1 4k:my-3 progress-bar-track">
                            <div className="progress-bar h-2 desktop:h-2.5 big:h-3 4k:h-5 rounded-full"
                                 style={{width: `${(1 - (listing.lending.amount / listing.lending.total)) * 100}%`}}/>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="w-full inline-flex justify-center items-center">
                        <p className={`text-white ${classes.text.large}`}>{listing.lending.amount}</p>
                        <p className={`text-white pl-1 sm:pt-0.5 ${classes.text.small}`}>{listing.lending.name}</p>
                        <p className={`text-gray-400 pl-1 ${classes.text.small}`}>≈${listing.lending.estimatedValue}</p>
                    </div>
                </>
            }
            <p className="text-xs lg:text-sm 2xl:text-tiny text-white justify-center flex">
                for {listing.duration}
            </p>
        </div>
    )
};

const CardBody: FunctionComponent<CardProps> = ({ listing }) => {
    { /* Borrow Card */ }
    if(listing.listingType === "borrow") {
        return (
            <div className="mt-1 4k:mt-4 flex flex-col w-full h-fit">
                <div className="w-full flex justify-center items-center">
                    <p className={`collateralized-by ${classes.text.medium}`}>Collateralized by</p>
                </div>
                <div className="w-full inline-flex justify-center items-center pt-1 4k:pt-3">
                    <p className={`text-white truncate ${classes.text.small}`}>{listing.collateral.amount}x {listing.collateral.name}</p>
                    <div className="w-6 h-6 rounded-full 4k:w-16 4k:h-16 bg-black ml-2 4k:ml-6 relative">
                        <Img src={`https://res.cloudinary.com/drgbtjcgt/image/fetch/${listing.collateral.icon}`}
                               className="rounded-full border-white border" alt={`icon-${listing.collateral.name}`} priority={true}
                        />
                    </div>
                </div>
            </div>
        )
    }

    { /* Lending Card */ }
    let collateralPerAmount: string;
    let roundedCollateral: number;

    if(listing.collateral.amount < 1) {
        collateralPerAmount = (Math.round(1 / listing.collateral.amount)).toString();
        if (collateralPerAmount.length > 7) {
            collateralPerAmount = collateralPerAmount.slice(0, 6) + "..."
        }
    } else roundedCollateral = Math.round(listing.collateral.amount);

    return (
        <div className="h-full w-full sm:px-2 flex flex-col justify-center">
            <div className="w-full pt-2 pb-1 inline-flex justify-center items-end">
                <p className={`card-asking-for ${classes.text.small}`}>Asking for:</p>
                <p className={`pl-1 sm:pl-2 text-[#FF6969] ${classes.text.large}`}>+{listing.returnPercentage}%
                    return</p>
            </div>
            <div className="pb-1 4k:pb-4 inline-flex items-center justify-center whitespace-nowrap">
                <p className={`card-and ${classes.text.small}`}>And</p>
                {listing.collateral.tokenType === "snip721" ?
                    <>
                        <p className={`sm:pl-2 pl-1 text-white ${classes.text.large}`}>{listing.collateral.amount} {listing.collateral.name}</p>
                        <p className={`sm:pl-2 pl-1 card-collateral ${classes.text.small}`}>as collateral</p>
                    </>
                    :
                    <>
                        {
                            listing.collateral.amount < 1 ?
                                <>
                                    <p className={`sm:pl-2 pl-1 text-white ${classes.text.large}`}>1 {listing.collateral.name}</p>
                                    <p className={`sm:pl-2 pl-1 card-collateral ${classes.text.small}`}>per {collateralPerAmount} {listing.lending.name}</p>
                                </>
                                :
                                <>
                                    <p className={`sm:pl-2 pl-1 text-white ${classes.text.large}`}>
                                        {
                                            roundedCollateral === listing.collateral.amount ?
                                                `${listing.collateral.amount}` : `~${roundedCollateral}`} {listing.collateral.name
                                        }
                                    </p>
                                    <p className={`sm:pl-2 pl-1 card-collateral ${classes.text.small}`}>per {collateralPerAmount} {listing.lending.name}</p>
                                </>
                        }
                    </>
                }
            </div>
        </div>
    );
};

const CardFooter: FunctionComponent<{ listing: Listing, setLoading: Dispatch<SetStateAction<boolean>> }> = ({ listing, setLoading }) => {
    {/* Borrow Card */}
    let imageDisplay;
    if(listing.listingType === "borrow") {
        if(listing.collateral.images.length > 0) {
            if(listing.collateral.images[0].length > 0) {
                if (listing.collateral.images.length > 1) imageDisplay = <MultiImage setLoading={setLoading} images={listing.collateral.images} />;
                else imageDisplay = <SingleImage setLoading={setLoading} images={listing.collateral.images} />;
            }
        }
        return (
            <div className="flex w-90% p-1 lg:p-2 2xl:p-3 h-fit">
                { imageDisplay }
            </div>
        )
    }

    {/* Lending Card */}
    if(listing.collateral.images.length === 0) return (<></>);
    return (
        <div className="h-full w-full flex items-end">
            <div className="my-2 p-1 lg:p-2 2xl:p-3 w-3/4 aspect-square mx-auto relative">
                <div
                    className="rounded-full z-10 bg-white absolute border 2xl:border-2 border-white border-double w-2/5 h-auto">
                    <Image
                        src={"https://res.cloudinary.com/drgbtjcgt/image/fetch/" + listing.collateral.images[0]}
                        width="100" height="100" alt={listing.collateral.name} priority={true}
                        className="rounded-full border-white border-2 w-full h-full" layout="responsive"
                    />
                </div>
                <div
                    className="rounded-full block w-full w-full border-double border-white border-4 2xl:border-6">
                    <Image
                        layout="responsive" width="500" height="500" priority={true}
                        className="rounded-full"
                        onLoadingComplete={() => setLoading(false)} alt={listing.lending.name}
                        src={"https://res.cloudinary.com/drgbtjcgt/image/fetch/" + listing.lending.image}
                    />
                </div>
            </div>
        </div>
    )
};

const CardSkeleton: FunctionComponent<{ listingType: string }> = ({ listingType }) => {
    {/* Borrowing Card */}
    if(listingType === "borrow") {
        return (
            <div className="animate-pulse flex justify-center space-x-4 w-full pt-1">
                <div className="py-2 w-full">
                    <div className="px-4 w-full">
                        <div className="h-2 bg-slate-700 mt-2 sm:mt-4 rounded" />
                        <div className="grid grid-cols-5 gap-4 mt-4">
                            <div className="h-2 bg-slate-700 rounded col-span-3 mt-2" />
                            <div className="h-2 bg-slate-700 rounded col-span-2 mt-2" />
                        </div>
                        <div className="h-2 rounded bg-slate-700 mt-4 sm:mt-6" />
                        <div className="py-3 w-full h-full">
                            <div className="rounded-2xl bg-slate-700 aspect-square mt-2 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    {/* Lending Card */}
    return (
        <div className="animate-pulse flex justify-center space-x-4 w-full pt-1">
            <div className="py-2 w-full">
                <div className="px-4 w-full">
                    <div className="h-2 bg-slate-700 mt-2 sm:mt-4 rounded" />
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <div className="h-2 bg-slate-700 rounded col-span-3 mt-2" />
                        <div className="h-2 bg-slate-700 rounded col-span-2 mt-2" />
                    </div>
                    <div className="h-2 rounded bg-slate-700 mt-4 sm:mt-6" />
                    <div className="p-3 pb-1 w-full h-full">
                        <div className="rounded-full bg-slate-700 aspect-square mt-2 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ListingCard: FunctionComponent<{ listing: Listing, index: number }> = ({ listing, index }) => {

  const [loading, setLoading] = useState(true);

  let hiddenClass: string = "flex";
  if(index === 2) hiddenClass = "hidden sm:flex";
  if(index === 3) hiddenClass = "hidden xl:flex";

  return (
    <div className={`w-full h-full justify-center ${hiddenClass} ${loading ? null : "hover:cursor-pointer"}`}>
      <div className="flex flex-col bg-[#1A2128] w-full px-4 rounded-lg items-center shadow-sm hover:shadow-xl transition duration-300">
        <CardTitle cardType={listing.listingType} />
          {
            loading ?
                <CardSkeleton listingType={listing.listingType} />
                :
                <>
                  <CardHeader listing={listing} />
                  <CardBody listing={listing} />
                </>
          }
          <CardFooter listing={listing} setLoading={setLoading} />
      </div>
    </div>
  )
};