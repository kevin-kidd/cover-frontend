import Img from "next/future/image";
import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import { Listing } from "../types/general";

const classes = {
  text: {
      smaller: "text-xs 2xl:text-sm",
      small: "text-xs lg:text-sm",
      medium: "text-sm lg:text-tiny",
      large: "text-tiny lg:text-base"
  }
};

type CardProps = {
    listing: Listing
}

type Snip721DisplayProps = {
    images: string[]
    setLoading: Dispatch<SetStateAction<boolean>>
}

const CardTitle: FunctionComponent<{cardType: string}> = ({cardType}) => {
  return (
      <div className="border-b border-[#8B98FF] w-full py-2 flex justify-center">
        <p className="card-title text-sm sm:text-tiny xl:text-base font-medium">
          { cardType === "borrow" ? "Asking to Borrow" : "Offering to Lend" }
        </p>
      </div>
  )
};

const CardHeader: FunctionComponent<CardProps> = ({ listing }) => {
    {/* Borrow Card */}
    if(listing.listingType === "borrow") {
        return (
            <div className="border-b border-[#8B98FF] flex flex-col w-full py-1">
                <div className="pt-1 px-2 w-fit mx-auto border-b border-[#535C95] inline-flex justify-center items-end py-1">
                    <p className={`text-white ${classes.text.medium}`}>{listing.borrowing.amount}</p>
                    <p className={`text-white pl-1 ${classes.text.small}`}>{listing.borrowing.name}</p>
                    <p className={`text-gray-400 pb-1 pl-1 ${classes.text.smaller}`}>≈${listing.borrowing.estimatedValue}</p>
                </div>
                <p className={`text-[#86DD85] flex font-light justify-center pt-1 ${classes.text.small}`}>Interest Rate of {listing.returnPercentage}%</p>
                <p className={`text-white font-light pl-1 pb-1 flex justify-center ${classes.text.smaller}`}>for {listing.duration}</p>
            </div>
        )
    }

    {/* Lending Card */}
    return (
        <div className="border-b border-[#8B98FF] flex flex-col w-full py-2">
            { listing.lending.total ?
                <>
                    <div className="w-full inline-flex justify-center items-end">
                        <p className={`text-white pl-1 sm:pl-2 ${classes.text.small}`}>{listing.lending.amount} / {listing.lending.total}</p>
                        <p className={`text-white pl-1 sm:pl-2 ${classes.text.smaller}`}>{listing.lending.name}</p>
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
                        <p className={`text-white ${classes.text.medium}`}>{listing.lending.amount}</p>
                        <p className={`text-white pl-1 ${classes.text.smaller}`}>{listing.lending.name}</p>
                        <p className={`text-gray-400 pb-1 pl-1 ${classes.text.smaller}`}>≈${listing.lending.estimatedValue}</p>
                    </div>
                </>
            }
            <p className={`text-white font-light justify-center flex ${classes.text.smaller}`}>
                for {listing.duration}
            </p>
        </div>
    )
};

const CardBody: FunctionComponent<CardProps> = ({ listing }) => {
    { /* Borrow Card */ }
    if(listing.listingType === "borrow") {
        return (
            <div className="mt-1 flex flex-col">
                <div className="w-full flex justify-center items-center">
                    <p className={`collateralized-by ${classes.text.medium}`}>Collateralized by</p>
                </div>
                <div className="w-full inline-flex justify-center items-center pt-1 4k:pt-3">
                    <p className={`text-white truncate ${classes.text.small}`}>{listing.collateral.amount}x {listing.collateral.name}</p>
                    <div className="w-6 h-6 rounded-full bg-black ml-2 relative">
                        <Img src={`https://res.cloudinary.com/drgbtjcgt/image/fetch/${listing.collateral.icon}`} placeholder="empty"
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
                <p className={`card-asking-for ${classes.text.smaller}`}>Asking for:</p>
                <p className={`pl-1 sm:pl-2 text-[#FF6969] ${classes.text.small}`}>+{listing.returnPercentage}%
                    return</p>
            </div>
            <div className="pb-1 4k:pb-4 inline-flex items-center justify-center whitespace-nowrap">
                <p className={`card-and ${classes.text.smaller}`}>And</p>
                {listing.collateral.tokenType === "snip721" ?
                    <>
                        <p className={`md:pl-2 pl-1 text-white ${classes.text.small}`}>{listing.collateral.amount} {listing.collateral.name}</p>
                        <p className={`md:pl-2 pl-1 card-collateral ${classes.text.smaller}`}>as collateral</p>
                    </>
                    :
                    <>
                        {
                            listing.collateral.amount < 1 ?
                                <>
                                    <p className={`md:pl-2 pl-1 text-white ${classes.text.small}`}>1 {listing.collateral.name}</p>
                                    <p className={`md:pl-2 pl-1 card-collateral ${classes.text.smaller}`}>per {collateralPerAmount} {listing.lending.name}</p>
                                </>
                                :
                                <>
                                    <p className={`md:pl-2 pl-1 text-white ${classes.text.small}`}>
                                        {
                                            roundedCollateral === listing.collateral.amount ?
                                                `${listing.collateral.amount}` : `~${roundedCollateral}`} {listing.collateral.name
                                        }
                                    </p>
                                    <p className={`md:pl-2 pl-1 card-collateral ${classes.text.smaller}`}>per {collateralPerAmount} {listing.lending.name}</p>
                                </>
                        }
                    </>
                }
            </div>
        </div>
    );
};

const MultiImage: FunctionComponent<Snip721DisplayProps> = ({ images, setLoading }) => {
    if(images.length > 2) {
        return (
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
                                className="rounded w-full h-full"
                                src={
                                    image.includes('data:image/') ?
                                        image :
                                        `https://res.cloudinary.com/drgbtjcgt/image/fetch/${image}`
                                }
                            />
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide className="text-white rounded bg-black">
                    Test
                </SwiperSlide>
            </Swiper>
        );
    }
    return (
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
                images.map((image, index) => (
                    <SwiperSlide key={image}>
                        <Img
                            key={`${image}-${index}`} alt="nft-image" priority={true} placeholder="empty"
                            onLoadingComplete={() => {
                                if(index === 1) setLoading(false);
                            }}
                            className="rounded w-full h-full"
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
    );
};

const CardFooter: FunctionComponent<{ listing: Listing, setLoading: Dispatch<SetStateAction<boolean>> }> = ({ listing, setLoading }) => {
    {/* Borrow Card */}
    let imageDisplay;
    if(listing.listingType === "borrow") {
        if(listing.collateral.images.length > 0) {
            if(listing.collateral.images[0].length > 0) {
                if (listing.collateral.images.length > 1) imageDisplay = <MultiImage setLoading={setLoading} images={listing.collateral.images} />;
                else imageDisplay = <Img
                    placeholder="empty" priority={true} alt="nft-image"
                    className="rounded bg-black w-full"
                    onLoadingComplete={() => setLoading(false)}
                    src={
                        listing.collateral.images[0].includes('data:image/') ?
                            listing.collateral.images[0] : `https://res.cloudinary.com/drgbtjcgt/image/fetch/${listing.collateral.images[0]}`
                    }
                />;
            }
        }
        return (
            <div className="w-auto h-auto p-1 p-3 mb-2 aspect-square">
                { imageDisplay }
            </div>
        )
    }

    {/* Lending Card */}
    if(listing.collateral.images.length === 0) return (<></>);
    return (
        <div className="h-auto w-auto p-2 lg:p-3 flex items-end">
            <div className="w-3/4 aspect-square mx-auto relative">
                <div
                    className="rounded-full z-10 bg-white absolute border border-white border-double w-2/5 h-auto">
                    <Image
                        src={"https://res.cloudinary.com/drgbtjcgt/image/fetch/" + listing.collateral.images[0]}
                        width="100" height="100" alt={listing.collateral.name} priority={true} placeholder="empty"
                        className="rounded-full border-white border-2 w-full h-full" layout="responsive"
                    />
                </div>
                <div
                    className="rounded-full block w-full w-full border-double border-white border-4 2xl:border-6">
                    <Image
                        layout="responsive" width="500" height="500" priority={true}
                        className="rounded-full" placeholder="empty"
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
            <div className="animate-pulse flex justify-center space-x-4 w-full h-fit pt-1">
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
  if(index === 2) hiddenClass = "hidden md:flex";
  if(index === 3) hiddenClass = "hidden xl:flex";

  return (
    <div className={`w-full sm:w-52 h-full mx-auto ${hiddenClass} ${loading ? null : "hover:cursor-pointer"}`}>
      <div className={`
        flex flex-col bg-[#1A2128] px-3 rounded-lg items-center shadow-sm hover:shadow-xl transition duration-300 w-full h-full
      `}>
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
          <div className={ loading ? "hidden" : "w-full h-full" }>
              <CardFooter listing={listing} setLoading={setLoading} />
          </div>
      </div>
    </div>
  )
};