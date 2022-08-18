import {FunctionComponent} from "react";
import {CogIcon} from "@heroicons/react/solid";

export const SettingsWidget: FunctionComponent<{page: string}> = ({ page }) => {
    return (
        <button
            className="flex rounded-full w-auto h-full border border-[#95a6ba] p-1 text-[#bac5d2] transition duration-300">
            <CogIcon className="h-full" />
        </button>
    )
};

export const PriceWidget: FunctionComponent<{coin: string}> = ({coin}) => {

    let price: number;
    if(coin === "SCRT") {
        price = 1.43
    }
    return (
        <div className="h-full px-6 flex justify-center rounded-2xl items-center border border-[#5596DC]">
            <p className="text-white text-sm">
                { coin } ${ price.toString() }
            </p>
        </div>
    )
};