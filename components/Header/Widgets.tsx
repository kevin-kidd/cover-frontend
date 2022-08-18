import {FunctionComponent} from "react";
import {CogIcon} from "@heroicons/react/solid";
import {useModalStore} from "../../stores/ModalStore";

export const FaucetWidget: FunctionComponent = () => {

    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const setModalTitle = useModalStore((state) => state.setTitle);
    const setModalName = useModalStore((state) => state.setName);

    const openFaucetPopup = () => {
        setModalName("faucet");
        setModalTitle("Faucet");
        setIsOpen(true);
    };

    return (
        <button onClick={openFaucetPopup}
            className="py-2 px-4 w-24 bg-[#1a2128] border-[#68E6F2] border rounded-2xl text-tiny text-gray-200 hover:text-white duration-200 transition">
            Faucet
        </button>
    )
};

export const SettingsWidget: FunctionComponent<{page: string}> = ({ page }) => {

    const setIsOpen = useModalStore((state) => state.setIsOpen);
    const setModalTitle = useModalStore((state) => state.setTitle);
    const setModalName = useModalStore((state) => state.setName);

    const openSettingsPopup = () => {
        setModalName("settings");
        setModalTitle("Settings");
        setIsOpen(true);
    };

    return (
        <button onClick={openSettingsPopup}
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