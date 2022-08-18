import {Dispatch, FunctionComponent, ReactElement, SetStateAction, useMemo, useState} from "react";
import {Snip721Token} from "../../stores/AssetStore";
import Link from "next/link";
import {EffectCards, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Img from "next/future/image";
import {ExternalLinkIcon} from "@heroicons/react/solid";

const CardFooter: FunctionComponent<
{
    images: string[],
    setLoading: Dispatch<SetStateAction<boolean>>
}> = ({
    images,
    setLoading
}) => {
    return (
        <>
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
                                    if(index === 0) setLoading(false);
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
        </>
    )
};

const CardBody: FunctionComponent<{
    name: string
    externalUrl: string
}> = ({ name, externalUrl }) => {
    return (
        <div className="w-full px-2 pt-4 pb-2 text-center text-white">
            <h2 className="text-center text-white font-semibold text-lg truncate w-full">
                { name }
            </h2>
            <a href={externalUrl} target="_blank" rel="noreferrer" className="inline-flex text-[#7BBD75] text-xs md:text-sm items-center">
                View on Stashh
                <ExternalLinkIcon className="ml-0.5 h-4 w-4" />
            </a>
        </div>
    )
};

const CardSkeleton: ReactElement = (
    <div className="animate-pulse flex justify-center space-x-4 w-full pt-1">
        <div className="pt-4 pb-2 w-full">
            <div className="px-4 pb-1 w-full">
                <div className="h-3 bg-slate-700 mt-1 px-4 rounded mx-auto" />
                <div className="h-2 rounded bg-slate-700 mt-2 sm:mt-6 mb-3 w-3/4 mx-auto" />
                <div className="p-3 pb-1 w-full h-full">
                    <div className="rounded-lg bg-slate-700 aspect-square mt-2 w-full" />
                </div>
            </div>
        </div>
    </div>
);

export const Snip721Card: FunctionComponent<
{
    nft: Snip721Token,
    contractAddress: string
}> = ({
    nft,
    contractAddress
}) => {

    const [loading, setLoading] = useState<boolean>(true);
    const externalUrl = useMemo(() => {
        return `https://stashh.io/collection/${contractAddress}/${nft.tokenId}`
    }, [nft, contractAddress]);

    return (
        <Link href={loading ? "#" : externalUrl} target="_blank" rel="noreferrer">
            <div className={`w-52 sm:w-60 h-full mx-auto ${loading ? null : "hover:cursor-pointer"}`}>
                <div className="flex flex-col bg-[#1A2128] px-3 rounded-lg items-center shadow-sm hover:shadow-lg transition duration-300 w-full h-full">
                    { loading
                        ?
                        <>
                            { CardSkeleton }
                        </>
                        :
                        <CardBody name={nft.name}
                                  externalUrl={externalUrl}
                        />
                    }
                    <div className={ loading ? "hidden" : "w-full h-full py-4 px-6" }>
                        <CardFooter images={nft.images} setLoading={setLoading} />
                    </div>
                </div>
            </div>
        </Link>
    );
};