import {FunctionComponent} from "react";
import {CogIcon} from "@heroicons/react/solid";
import {useHomeStore} from "../../stores/Home";

export const ListingTypeToggle: FunctionComponent = () => {

    const listingToggleActive = useHomeStore((state) => state.listingToggleActive);
    const toggleListing = useHomeStore((state) => state.toggleListing);

    return (
        <div className="toggle-button-gradient border sm:border-2 border-transparent rounded-2xl flex mr-2 sm:mr-6 lg:mr-12 h-full" onClick={() => toggleListing()}>
            <button
                className={`w-1/2 group flex items-center ${listingToggleActive ? "toggle-active rounded-2xl bg-[#28333e]" : null}`}
            >
                <a className={`text-sm sm:text-tiny lg:text-kindasmall px-4 sm:px-6 lg:px-8 mr-1 ${listingToggleActive ? "text-[#eeeeee]" : "group-hover:text-[#eeeeee] text-[#8c8c8c] transition duration-150"}`}>
                    Lend
                </a>
            </button>
            <button
                className={`w-1/2 group flex items-center ${listingToggleActive ? null : "toggle-active rounded-2xl bg-[#28333e]"}`}
            >
                <a className={`text-sm sm:text-tiny lg:text-kindasmall px-4 sm:px-6 lg:px-8 mr-1 ${listingToggleActive ? "group-hover:text-[#eeeeee] text-[#8c8c8c] transition duration-150" : "text-[#eeeeee]"}`}>
                    Borrow
                </a>
            </button>
        </div>
    )
};

export const TokenTypeToggle: FunctionComponent = () => {

    const tokenToggleActive = useHomeStore((state) => state.tokenToggleActive);
    const toggleToken = useHomeStore((state) => state.toggleToken);

    return (
        <div className="toggle-button-gradient border sm:border-2 border-transparent rounded-2xl flex mr-2 sm:mr-6 lg:mr-12 h-full" onClick={() => toggleToken()}>
            <button
                className={`w-1/2 group flex items-center ${tokenToggleActive ? "toggle-active rounded-2xl bg-[#28333e]" : null}`}
            >
                <a className={`text-sm sm:text-tiny lg:text-kindasmall px-4 sm:px-6 lg:px-8 mr-1 ${tokenToggleActive ? "text-[#eeeeee]" : "group-hover:text-[#eeeeee] text-[#8c8c8c] transition duration-150"}`}>
                    NFTs
                </a>
            </button>
            <button
                className={`w-1/2 group flex items-center ${tokenToggleActive ? null : "toggle-active rounded-2xl bg-[#28333e]"}`}
            >
                <a className={`text-sm sm:text-tiny lg:text-kindasmall px-4 sm:px-6 lg:px-8 mr-1 ${tokenToggleActive ? "group-hover:text-[#eeeeee] text-[#8c8c8c] transition duration-150" : "text-[#eeeeee]"}`}>
                    Tokens
                </a>
            </button>
        </div>
    )
};

export const SettingsButton: FunctionComponent = () => {
    return (
        <button className="hidden sm:flex rounded-full border border-[#b2bfcd] w-12 h-auto p-1 text-[#b2bfcd] hover:text-[#bac5d2] hover:border-[#bac5d2] transition duration-150">
            <CogIcon className="h-full w-full"/>
        </button>
    );
};