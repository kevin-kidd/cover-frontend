import {FunctionComponent} from "react";
import {CogIcon} from "@heroicons/react/solid";
import {useHomeStore} from "../../stores/Home";

export const ToggleButton: FunctionComponent<{type: string}> = ({ type }) => {

    const listingToggleActive = useHomeStore((state) => state.listingToggleActive);
    const toggleListing = useHomeStore((state) => state.toggleListing);
    const tokenToggleActive = useHomeStore((state) => state.tokenToggleActive);
    const toggleToken = useHomeStore((state) => state.toggleToken);

    let toggleButton, toggleActive, toggleNames;

    if(type === "token") {
        toggleButton = toggleToken;
        toggleActive = tokenToggleActive;
        toggleNames = ["NFTs", "Tokens"];
    } else {
        toggleButton = toggleListing;
        toggleActive = listingToggleActive;
        toggleNames = ["Lend", "Borrow"];
    }

    return (
        <div className="toggle-button-gradient border sm:border-2 border-transparent rounded-2xl flex h-full" onClick={() => toggleButton()}>
            <button
                className={`w-1/2 h-full group flex items-center ${toggleActive ? "toggle-active rounded-2xl bg-[#28333e]" : null}`}
            >
                <a className={`text-xs sm:text-sm px-3 sm:px-5 mr-1 ${toggleActive ? "text-[#eeeeee]" : "group-hover:text-[#c5c5c5] text-[#8c8c8c] transition duration-300"}`}>
                    { toggleNames[0] }
                </a>
            </button>
            <button
                className={`w-1/2 group flex items-center ${toggleActive ? null : "toggle-active rounded-2xl bg-[#28333e]"}`}
            >
                <a className={`text-xs sm:text-sm px-3 sm:px-5 mr-1 ${toggleActive ? "group-hover:text-[#c5c5c5] text-[#8c8c8c] transition duration-300" : "text-[#eeeeee]"}`}>
                    { toggleNames[1] }
                </a>
            </button>
        </div>
    )
};

export const SettingsButton: FunctionComponent<{page: string}> = ({ page }) => {
    return (
        <button
            className="flex rounded-full w-auto h-full border border-[#95a6ba] p-1 text-[#bac5d2] hover:border-[#bac5d2] transition duration-300">
            <CogIcon className="h-full" />
        </button>
    )
};