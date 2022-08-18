import {FunctionComponent} from "react";
import {CogIcon} from "@heroicons/react/solid";
import {useHomeStore} from "../../stores/Home";

export const TypeToggle: FunctionComponent = () => {

    const listingToggleActive = useHomeStore((state) => state.listingToggleActive);
    const listingToggle = useHomeStore((state) => state.listingToggle);

    return (
        <>
            <div className="rounded-2xl bg-black flex border sm:border-2 border-black 4k:border-4 mr-2 sm:mr-6 lg:mr-12 h-full" onClick={() => listingToggle()}>
                <button
                    className={`w-1/2 group flex items-center ${listingToggleActive ? "toggle-active bg-white" : null}`}
                >
                    <a className={`text-tiny px-4 mr-1 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${listingToggleActive ? null : 'group-hover:text-white text-[#9196A8]'}`}>
                        Lend
                    </a>
                </button>
                <button
                    className={`w-1/2 group flex items-center ${listingToggleActive ? null : "toggle-active bg-white"}`}
                >
                    <a className={`text-tiny px-4 mr-1 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${listingToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
                        Borrow
                    </a>
                </button>
            </div>
        </>
    )
};

export const TokenToggle: FunctionComponent = () => {

    const tokenToggleActive = useHomeStore((state) => state.tokenToggleActive);
    const tokenToggle = useHomeStore((state) => state.tokenToggle);

    return (
        <>
            <div className="rounded-2xl bg-black flex border sm:border-2 border-black 4k:border-4 mr-2 sm:mr-6 lg:mr-12 h-full" onClick={() => tokenToggle()}>
                <button
                    className={`w-1/2 group flex items-center ${tokenToggleActive ? 'toggle-active bg-white' : null}`}
                >
                    <a className={`text-tiny px-4 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${tokenToggleActive ? null : 'text-[#9196A8] group-hover:text-white'}`}>
                        NFTs
                    </a>
                </button>
                <button
                    className={`w-1/2 group flex items-center ${tokenToggleActive ? null : 'toggle-active bg-white'}`}
                >
                    <a className={`text-tiny px-4 mr-2 lg:px-8 big:px-12 4k:px-16 sm:text-kindasmall big:text-xl 4k:text-4xl ${tokenToggleActive ? 'text-[#9196A8] group-hover:text-white transition duration-150' : null}`}>
                        Tokens
                    </a>
                </button>
            </div>
        </>
    )
};

export const Cog: FunctionComponent = () => {
    return (
        <button className="hidden sm:flex rounded-full border border-[#b2bfcd] w-12 h-full big:w-20 4k:w-28 p-1 text-[#b2bfcd] hover:text-[#e0e5eb] hover:border-[#e0e5eb] transition duration-150">
            <CogIcon className="h-full w-full"/>
        </button>
    );
};