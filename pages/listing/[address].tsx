import { useRouter } from "next/router";
import Img from "next/future/image";
import { NextPage } from "next";
import {SettingsWidget} from "../../components/Header/Widgets";
import Head from "next/head";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import React, {ReactElement, useState} from "react";
import classNames from "classnames";
import exampleListings from "../../exampleListings.json";
import {Listing} from "../../types/general";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const ListingPage: NextPage<{ listing: Listing }> = ({ listing }) => {

    const [loanPercent, setLoanPercent] = useState<number>(100);
    const [loanAmount, setLoanAmount] = useState<number>(
        listing.listingType === "borrow" ? listing.borrowing.amount : listing.lending.amount
    );
    const [roi, setRoi] = useState<number>(Math.round(loanAmount * (listing.returnPercentage / 100)));

    const items = {
        left: [],
        right: [SettingsWidget({ page: "test" })]
    };

    const images = [
        "https://images.anons.army/img/0872.jpg",
        "https://images.anons.army/img/0004_Custom.jpg",
        "https://images.anons.army/img/0069_Custom.jpg"
    ];

    let principal: {
            amount: number,
            symbol: string,
            estimatedValue: number
        };


    if(listing.listingType === "borrow") {
        principal = {
            amount: listing.borrowing.amount,
            symbol: listing.borrowing.name,
            estimatedValue: listing.borrowing.estimatedValue
        };
    } else {
        principal = {
            amount: listing.lending.amount,
            symbol: listing.lending.name,
            estimatedValue: listing.lending.estimatedValue
        };
    }

    const updateAmount = (e) => {
        setLoanPercent(e.target.value);
        const amount = Math.round(principal.amount * (e.target.value / 100));
        setLoanAmount(amount);
        const returnAmount = round(amount * (listing.returnPercentage / 100), 2).toFixed(2);
        setRoi(Number(returnAmount));
    };

    const loanCard: ReactElement = (
        <div className="flex flex-col items-center w-full max-w-xxs h-full mx-auto bg-[#1A2128] px-5 py-3 rounded-lg items-center shadow-sm">
            <h1 className="card-title text-tiny lg:text-xl font-medium text-white px-7 pb-2">
                { listing.listingType === "borrow" ? "Asking to Borrow" : "Offering to Lend" }
            </h1>
            <div className="w-full items-center flex flex-col gap-y-1 pb-4 pt-3 border-t border-b border-[#8B98FF]">
                <div className="inline-flex pt-1">
                    <p className="text-sm lg:text-base text-white">
                        {`${principal.amount} ${principal.symbol}`}
                    </p>
                    <p className="pl-1 text-xs lg:text-sm text-gray-400">
                        ≈{ principal.estimatedValue }
                    </p>
                </div>
                <p className="text-[#86DD85] text-sm lg:text-tiny">
                    at an interest rate of { listing.returnPercentage }%
                </p>
                <p className="text-white text-xs lg:text-sm">
                    for { listing.duration }
                </p>
            </div>
            <p className="text-white text-xs leading-5 text-center py-3">
                { listing.listingType === "borrow" ? "ROI:" : "Return:" }
                <span className={
                    classNames(
                        "font-medium pl-1",
                        listing.listingType === "borrow" ? "text-[#86DD85]" : "text-[#FF6969]"
                    )
                }>
                    { listing.listingType === "borrow" ? `up to ≈${ roi }` : `≈${roi + loanAmount}` } { principal.symbol } in { listing.duration }
                </span>
                <br />
                { listing.listingType === "borrow" ? "Or else, you will keep the collateral" : "Or else, you will lose your collateral" }.
                <br />
                The interest is applied incrementally
            </p>
            <div className="tooltip tooltip-right flex justify-center tooltip-info w-full my-2 w-10/12" data-tip={loanAmount}>
                <input type="range" min="10" max="100" value={loanPercent} step="10"
                       onChange={updateAmount}
                       className="range range-primary range-sm"
                />
            </div>
            <button className="my-3 p-4 w-fit flex items-center rounded-lg text-tiny border border-[#68E6F2]
            text-[#cccccc] hover:text-[#eeeeee] transition duration-500 hover:border-[#8eecf5]"
            >
                { listing.listingType === "borrow" ? "Provide the Loan" : "Accept the Loan" }
            </button>
        </div>
    );

    const myPositions: ReactElement = (
        <div className="col-span-1 flex flex-col items-center w-full max-w-xxs h-full mx-auto bg-[#1A2128] px-5 py-3 rounded-lg items-center shadow-sm">
            <h1 className="card-title text-tiny lg:text-xl font-medium text-white w-full justify-center pb-2 border-b border-[#8B98FF]">
                My Positions
            </h1>
            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className="rounded-none">Amount</th>
                            <th className="rounded-none">Expires</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="font-normal">300</th>
                            <th className="font-normal">2 days</th>
                        </tr>
                        <tr>
                            <th className="font-normal">500</th>
                            <th className="font-normal">4 days</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const collateralDetails: ReactElement = (
        <div className="flex flex-col w-full pt-2 mx-4">
            <div className="flex items-center gap-x-4">
                <h1 className="card-title text-lg lg:text-2xl font-medium">Collateralized by</h1>
                <h1 className="text-white text-lg lg:text-2xl font-medium">1 Anon</h1>
            </div>
            <a href="#" className="mt-1.5 text-[#5596DC] after:content-['_↗'] font-semibold text-tiny lg:text-base hover:text-[#77abe3] transition duration-300">
                Learn more about Anons
            </a>
            <div className="w-full grid grid-cols-2">

                <div className="w-full mt-4">
                    <h4 className="mt-7 text-white text-lg lg:text-2xl font-medium">Anon #345</h4>
                    <p className="mt-1 text-white w-10/12 text-tiny">
                        Put some specific info about the NFT here.
                        Perhaps rarety info and etc. Maybe we can also
                        get these from Stashh API.
                    </p>
                    <div className="mt-10 w-10/12 flex justify-center items-center flex-col">
                        <h5 className="text-white">Description of the listing creator:</h5>
                        <div className="mt-1 rounded-lg bg-[#1A2128] w-full p-4">
                            <p className="text-[#B2BFCD] text-sm">
                                This NFT can be used to gain access to the Anons telegram group.
                            </p>
                        </div>
                    </div>
                </div>


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
                        { images.map((image) => (
                            <SwiperSlide key={`slider-${image}`}>
                                <Img priority={true} placeholder="empty" className="aspect-square rounded w-full h-full"
                                     src={"https://res.cloudinary.com/drgbtjcgt/image/fetch/" + image}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>

            </div>
        </div>
    );

    return (
        <>
            <Head>
                <title>Listing</title>
            </Head>
            <main className="relative h-screen">
                <Menu activeTitle={"Explore"} />
                <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                    <Header items={items} />
                    <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
                        <div className="border-t w-full grid sm:grid-cols-3 border-black mb-4 lg:mb-8 w-full px-2 sm:px-2 md:px-3 xl:px-6 pt-12">
                            <div className="w-full flex flex-col col-span-1 gap-y-4">
                                { loanCard }
                                { myPositions }
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                { collateralDetails }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export async function getServerSideProps(context) {
    const { address } = context.query;

    let listing: Listing = null;

    const featured = exampleListings.featured.find((listing) => listing.address === address);
    if(featured) {
        listing = featured;
    }
    const lend = exampleListings.lend.nft.find((listing) => listing.address === address);
    if(lend) {
        listing = lend;
    }

    return { props: { listing } };
}

export default ListingPage;