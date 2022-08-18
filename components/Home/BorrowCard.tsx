import Image from "next/future/image";
import {Dispatch, SetStateAction, useState} from "react";
import { FunctionComponent } from "react";
import { Listing } from "../../stores/Home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { EffectCards } from "swiper";

type BorrowCardProps = {
  listing: Listing
}

const classes = {
  gradient: "text-tiny desktop:text-kindasmaller big:text-lg 4k:text-3xl",
  amount: "text-kindasmaller desktop:text-kindasmall big:text-xl 4k:text-4xl"
};

type Snip721DisplayProps = {
  images: string[]
  setLoading: Dispatch<SetStateAction<boolean>>
}

const SingleImage: FunctionComponent<Snip721DisplayProps> = ({ images, setLoading }) => {
    return (
        <div className="my-2 p-1 4k:p-8 w-full aspect-square">
            <Image
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
            <div className="my-2 p-1 4k:p-8 w-full aspect-square">
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
                        images.slice(0,2).map((image, index) => (
                            <SwiperSlide key={image}>
                                <Image
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
        <div className="my-2 p-1 4k:p-8 w-full aspect-square">
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
                            <Image
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

const Snip721Display: FunctionComponent<Snip721DisplayProps> = ({ images, setLoading }) => {
    if(images.length > 0) {
        if(images[0].length > 0) {
            if (images.length > 1) {
                return (<MultiImage setLoading={setLoading} images={images} />);
            }
            else return (<SingleImage setLoading={setLoading} images={images} />);
        }
    }
    return null;
};

export const BorrowCard: FunctionComponent<BorrowCardProps> = ({ listing }) => {

    const [loading, setLoading] = useState(true);

    return (
        <div className={`col-span-1 flex w-full h-full justify-center ${loading ? null : "hover:cursor-pointer"}`}>
          <div className="flex flex-col bg-[#1A2128] w-full object-cover px-4 4k:px-10 rounded-lg big:rounded-2xl 4k:rounded-3xl items-center shadow-sm hover:shadow-2xl transition duration-300">
            <div className="border-b border-[#8B98FF] w-full py-2 4k:pt-5 4k:pb-4 flex justify-center">
              <p className="card-title text-kindasmall desktop:text-base big:text-xl 4k:text-4xl">Asking to Borrow</p>
            </div>
            {
              loading ?
                <div className="animate-pulse flex justify-center space-x-4 w-full pt-1">
                  <div className="py-2 w-full">
                    <div className="px-4 w-full">
                      <div className="h-2 4k:h-4 bg-slate-700 mt-2 sm:mt-4 4k:mt-10 rounded 4k:rounded-2xl" />
                      <div className="grid grid-cols-5 gap-4 mt-4 4k:mt-8">
                        <div className="h-2 4k:h-4 bg-slate-700 rounded 4k:rounded-2xl col-span-3 mt-2 4k:mt-6" />
                        <div className="h-2 4k:h-4 bg-slate-700 rounded 4k:rounded-2xl col-span-2 mt-2 4k:mt-6" />
                      </div>
                      <div className="h-2 4k:h-4 rounded 4k:rounded-2xl bg-slate-700 mt-4 sm:mt-6 4k:mt-10" />
                      <div className="py-3 w-full h-full">
                        <div className="rounded-2xl bg-slate-700 aspect-square mt-2 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
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
                  <div className="mt-1 4k:mt-4 flex flex-col w-full h-fit">
                    <div className="w-full flex justify-center items-center">
                      <p className={`collateralized-by ${classes.amount}`}>Collateralized by</p>
                    </div>
                    <div className="w-full inline-flex justify-center items-center pt-1 4k:pt-3">
                      <p className={`text-white truncate ${classes.amount}`}>{listing.collateral.amount}x {listing.collateral.name}</p>
                      <div className="w-6 h-6 rounded-full 4k:w-16 4k:h-16 bg-black ml-2 4k:ml-6 relative">
                        <Image src={`https://res.cloudinary.com/drgbtjcgt/image/fetch/${listing.collateral.icon}`} className="rounded-full border-white border" alt={`icon-${listing.collateral.name}`} priority={true} />
                      </div>
                    </div>
                  </div>
                </>
            }

            <div className="lg:flex hidden w-full h-fit">
                <Snip721Display images={listing.collateral.images} setLoading={setLoading} />
            </div>
            <div className="lg:hidden flex w-full h-fit">
              <Snip721Display images={listing.collateral.images.slice(0,1)} setLoading={setLoading} />
            </div>
          </div>
        </div>
    )
};